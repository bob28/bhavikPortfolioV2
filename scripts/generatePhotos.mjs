import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import sharp from "sharp"; // The powerhouse

const picturesDir = path.join(process.cwd(), "public", "pictures");
const optimizedDir = path.join(process.cwd(), "public", "optimized");

// Ensure optimized directories exist
if (!fs.existsSync(optimizedDir)) fs.mkdirSync(optimizedDir);

let categories = [];
try {
  categories = fs.readdirSync(picturesDir).filter((file) => {
    return fs.statSync(path.join(picturesDir, file)).isDirectory();
  });
} catch (error) {
  console.error("Error reading pictures directory", error);
}

const enrichedPhotos = [];

for (const category of categories) {
  const categoryPath = path.join(picturesDir, category);
  const optimizedCategoryPath = path.join(optimizedDir, category);

  if (!fs.existsSync(optimizedCategoryPath)) fs.mkdirSync(optimizedCategoryPath);

  const files = fs.readdirSync(categoryPath).filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  for (const file of files) {
    const fileName = path.parse(file).name;
    const fullPath = path.join(categoryPath, file);
    const thumbPath = path.join(optimizedCategoryPath, `${fileName}-thumb.webp`);
    const displayPath = path.join(optimizedCategoryPath, `${fileName}-display.webp`);

    try {
      // 1. Generate Thumbnail (for the grid)
      await sharp(fullPath)
        .rotate()
        .resize(600, null, { withoutEnlargement: true }) // Maintains aspect ratio
        .webp({ quality: 85 })
        .toFile(thumbPath);

      // 2. Generate Display Version (balanced for desktop)
      await sharp(fullPath)
        .rotate()
        .resize(1600, null, { withoutEnlargement: true }) // Maintains aspect ratio
        .webp({ quality: 95 })
        .toFile(displayPath);

      const metadata = await sharp(fullPath).rotate().metadata();

      enrichedPhotos.push({
        src: `optimized/${category}/${fileName}-display.webp`,
        thumbnail: `optimized/${category}/${fileName}-thumb.webp`,
        category,
        width: metadata.width || 800,
        height: metadata.height || 600,
      });
      console.log(`✅ Processed: ${file}`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error);
    }
  }
}

// Randomize & Save (Your existing logic)
for (let i = enrichedPhotos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [enrichedPhotos[i], enrichedPhotos[j]] = [enrichedPhotos[j], enrichedPhotos[i]];
}

const outDir = path.join(process.cwd(), "data");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(
  path.join(outDir, "photos.json"),
  JSON.stringify({ categories, photos: enrichedPhotos }, null, 2)
);
console.log("Photos optimized and metadata generated successfully.");