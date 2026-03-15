#!/usr/bin/env node
/**
 * LEGACY: Secretariat images are expected to already have transparent backgrounds.
 * Do not run this script for normal workflow—just add PNGs to public/secretariat/ as-is.
 *
 * This script was used when assets had opaque black/white backgrounds; it makes only
 * edge-connected black/white transparent. Run only if you have images that need that fix.
 *   node scripts/process-secretariat-images.js
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SECRETARIAT_DIR = path.resolve(__dirname, "..", "public", "secretariat");
const DEFAULT_BLACK_THRESHOLD = 35;
const WHITE_THRESHOLD = 248;

async function makeEdgeBackgroundTransparent(inputPath, outputPath, blackThreshold = DEFAULT_BLACK_THRESHOLD) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const width = info.width;
  const height = info.height;
  const len = width * height;

  // 1. Candidate mask: white always; black only if blackThreshold > 0 (use 0 for white-only, keeps black suit/clothing)
  const candidate = new Uint8Array(len);
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isBlack = blackThreshold > 0 && r <= blackThreshold && g <= blackThreshold && b <= blackThreshold;
    const isWhite = r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
    const px = (i / channels) | 0;
    candidate[px] = isBlack || isWhite ? 1 : 0;
  }

  // 2. Background = candidates that are connected to the image border (BFS from edges)
  const background = new Uint8Array(len);
  const queue = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x !== 0 && x !== width - 1 && y !== 0 && y !== height - 1) continue;
      const idx = y * width + x;
      if (candidate[idx] && !background[idx]) {
        background[idx] = 1;
        queue.push({ x, y });
      }
    }
  }
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  while (queue.length) {
    const { x, y } = queue.shift();
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      const idx = ny * width + nx;
      if (candidate[idx] && !background[idx]) {
        background[idx] = 1;
        queue.push({ x: nx, y: ny });
      }
    }
  }

  // 3. Set alpha: 0 only for edge-connected background, 255 otherwise (solid edges, no semi-transparent artifacts)
  for (let i = 0; i < data.length; i += channels) {
    const px = (i / channels) | 0;
    data[i + 3] = background[px] ? 0 : 255;
  }

  await sharp(data, {
    raw: { width, height, channels },
  })
    .png()
    .toFile(outputPath);
}

async function main() {
  if (!fs.existsSync(SECRETARIAT_DIR)) {
    console.error("public/secretariat/ not found.");
    process.exit(1);
  }

  // Optional: node script jules.png 100 → process only jules.png with dark threshold 100 (for grey-blue gradients)
  const singleFile = process.argv[2];
  const darkThreshold = process.argv[3] ? parseInt(process.argv[3], 10) : DEFAULT_BLACK_THRESHOLD;
  const files = singleFile
    ? [singleFile.replace(/^.*[/\\]/, "")] // ensure just filename
    : fs.readdirSync(SECRETARIAT_DIR).filter((f) => f.endsWith(".png"));

  for (const file of files) {
    const inputPath = path.join(SECRETARIAT_DIR, file);
    if (!fs.existsSync(inputPath)) {
      console.error("Not found:", inputPath);
      continue;
    }
    await makeEdgeBackgroundTransparent(inputPath, inputPath, darkThreshold);
    console.log("Processed:", file, darkThreshold !== DEFAULT_BLACK_THRESHOLD ? `(dark threshold ${darkThreshold})` : "");
  }
  console.log("Done: only edge-connected background → transparent.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
