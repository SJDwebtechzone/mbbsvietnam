import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "./src/assets";
const maxSizeKB = 300; // target max size
const maxWidth = 1920; // max width for large images

const files = fs.readdirSync(assetsDir);

for (const file of files) {
  const filePath = path.join(assetsDir, file);
  const stat = fs.statSync(filePath);

  if (!stat.isFile()) continue;

  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"].includes(ext)) continue;

  const sizeKB = stat.size / 1024;
  if (sizeKB < maxSizeKB) continue; // skip already-small files

  console.log(`Compressing ${file} (${sizeKB.toFixed(0)} KB)...`);

  const buffer = fs.readFileSync(filePath);
  const image = sharp(buffer);
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth });
  }

  let outputBuffer;
  if (ext === ".png" || ext === ".PNG") {
    outputBuffer = await pipeline.png({ quality: 75, compressionLevel: 9 }).toBuffer();
  } else {
    outputBuffer = await pipeline.jpeg({ quality: 75, mozjpeg: true }).toBuffer();
  }

  fs.writeFileSync(filePath, outputBuffer);
  const newSizeKB = outputBuffer.length / 1024;
  console.log(`  → ${newSizeKB.toFixed(0)} KB (saved ${(sizeKB - newSizeKB).toFixed(0)} KB)`);
}

console.log("Done!");