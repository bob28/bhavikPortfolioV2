import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';


interface ImageInfo {
  src: string;
  width: number;
  height: number;
  isSelected: boolean; 
}

export const getImageDimensions = (): ImageInfo[] => {
  const picturesDir = path.join(process.cwd(), 'src', 'pictures');
  console.log(picturesDir);
  const images: ImageInfo[] = [];

  fs.readdirSync(picturesDir).forEach((file) => {
    const filePath = path.join(picturesDir, file);
    if (!/\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)) {
      return;
    }
    const dimensions = sizeOf(filePath);
    
    if (dimensions.width && dimensions.height) {
      images.push({
        src: filePath,
        width: dimensions.width,
        height: dimensions.height,
        isSelected: true,
      });
    }
  });

  return images;
};