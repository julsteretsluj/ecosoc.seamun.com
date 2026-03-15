#!/usr/bin/env node
/**
 * Remove edge-connected black/white background from committee logo PNGs.
 * Usage: node scripts/process-committee-logo-bg.js [file1.png file2.png ...]
 * With no args, processes unwomen.png and interpol.png.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const LOGOS_DIR = path.resolve(__dirname, "..", "public", "committee-logos");
const BLACK_THRESHOLD = 35;
const WHITE_THRESHOLD = 248;

async function makeEdgeBackgroundTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const width = info.width;
  const height = info.height;
  const len = width * height;

  const candidate = new Uint8Array(len);
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isBlack = r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;
    const isWhite = r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
    candidate[(i / channels) | 0] = isBlack || isWhite ? 1 : 0;
  }

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

  for (let i = 0; i < data.length; i += channels) {
    data[i + 3] = background[(i / channels) | 0] ? 0 : 255;
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);
}

async function main() {
  const files = process.argv.slice(2).length
    ? process.argv.slice(2).map((f) => f.replace(/^.*[/\\]/, ""))
    : ["unwomen.png", "interpol.png"];

  for (const file of files) {
    const inputPath = path.join(LOGOS_DIR, file);
    if (!fs.existsSync(inputPath)) {
      console.error("Not found:", inputPath);
      continue;
    }
    await makeEdgeBackgroundTransparent(inputPath, inputPath);
    console.log("Processed:", file);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
