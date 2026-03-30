import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

const picturesDir = path.join(process.cwd(), "public", "pictures");
let categories = [];
try {
  categories = fs.readdirSync(picturesDir).filter((file) => {
    try {
      return fs.statSync(path.join(picturesDir, file)).isDirectory();
    } catch (err) {
      return false;
    }
  });
} catch (error) {
  console.error("Error reading pictures directory", error);
}

const enrichedPhotos = [];

categories.forEach((category) => {
  const categoryPath = path.join(picturesDir, category);
  const files = fs.readdirSync(categoryPath).filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
  files.forEach((file) => {
    const src = `pictures/${category}/${file}`;
    try {
      const fullPath = path.join(categoryPath, file);
      const buffer = fs.readFileSync(fullPath);
      const dimensions = imageSize(buffer);
      enrichedPhotos.push({
        src,
        category,
        width: dimensions.width || 800,
        height: dimensions.height || 600,
      });
    } catch (error) {
      enrichedPhotos.push({
        src,
        category,
        width: 800,
        height: 600,
      });
    }
  });
});

// randomize photos
for (let i = enrichedPhotos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [enrichedPhotos[i], enrichedPhotos[j]] = [enrichedPhotos[j], enrichedPhotos[i]];
}

const outDir = path.join(process.cwd(), "data");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

fs.writeFileSync(
  path.join(outDir, "photos.json"),
  JSON.stringify({ categories, photos: enrichedPhotos }, null, 2)
);
console.log("Photos metadata generated successfully.");
