#!/usr/bin/env node
/**
 * Crop black background from ECOSOC.png and apply rounded corners.
 * Writes to public/ECOSOC.png for the Next.js app.
 * Run: node scripts/process-ecosoc-card.js
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const INPUT = path.join(ROOT, "ECOSOC.png");
const OUTPUT = path.join(ROOT, "public", "ECOSOC.png");
const CORNER_RADIUS = 24;

async function main() {
  if (!fs.existsSync(INPUT)) {
    console.error("ECOSOC.png not found at project root.");
    process.exit(1);
  }

  const image = sharp(INPUT);
  const meta = await image.metadata();
  const width = meta.width || 0;
  const height = meta.height || 0;

  // Trim solid black (and near-black) background explicitly
  const trimmed = await image
    .trim({
      background: "#000000",
      threshold: 25,
    })
    .toBuffer({ resolveWithObject: true });

  const w = trimmed.info.width;
  const h = trimmed.info.height;

  // Rounded rect SVG mask (dest-in keeps only where mask is opaque)
  const radius = Math.min(CORNER_RADIUS, w / 4, h / 4);
  const svg = Buffer.from(
    `<svg width="${w}" height="${h}">
      <rect x="0" y="0" width="${w}" height="${h}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>`
  );

  await sharp(trimmed.data)
    .composite([{ input: svg, blend: "dest-in" }])
    .png()
    .toFile(OUTPUT);

  console.log("Done: trimmed black background, applied rounded corners → public/ECOSOC.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
