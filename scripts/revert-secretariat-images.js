#!/usr/bin/env node
/**
 * Revert secretariat images to full opacity (no transparency).
 * Run: node scripts/revert-secretariat-images.js
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SECRETARIAT_DIR = path.resolve(__dirname, "..", "public", "secretariat");

async function revertToFullOpacity(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const width = info.width;
  const height = info.height;

  for (let i = 3; i < data.length; i += channels) {
    data[i] = 255; // alpha = 255 for every pixel
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

  const files = fs.readdirSync(SECRETARIAT_DIR).filter((f) => f.endsWith(".png"));
  for (const file of files) {
    const inputPath = path.join(SECRETARIAT_DIR, file);
    await revertToFullOpacity(inputPath, inputPath);
    console.log("Reverted:", file);
  }
  console.log("Done: all secretariat images reverted to full opacity (no transparent background).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
