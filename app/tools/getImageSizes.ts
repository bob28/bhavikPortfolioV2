import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module
import sizeOf from 'image-size'; // Import the image-size module to get image dimensions

// Define an interface for image information
interface ImageInfo {
  src: string; // Source path of the image
  width: number; // Width of the image
  height: number; // Height of the image
  isSelected: boolean; // Flag to indicate if the image is selected
}

// Function to get dimensions of images in the 'pictures' directory
export const getImageDimensions = (): ImageInfo[] => {
  // Define the path to the 'pictures' directory
  const picturesDir = path.join(process.cwd(), 'src', 'pictures');
  console.log(picturesDir); // Log the directory path for debugging
  const images: ImageInfo[] = []; // Initialize an array to store image information

  // Read all files in the 'pictures' directory
  fs.readdirSync(picturesDir).forEach((file) => {
    const filePath = path.join(picturesDir, file); // Get the full path of the file
    // Check if the file is an image based on its extension
    if (!/\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)) {
      return; // Skip non-image files
    }
    const dimensions = sizeOf(filePath); // Get the dimensions of the image
    
    // If the image has valid width and height, add it to the images array
    if (dimensions.width && dimensions.height) {
      images.push({
        src: filePath, // Set the source path of the image
        width: dimensions.width, // Set the width of the image
        height: dimensions.height, // Set the height of the image
        isSelected: true, // Set the isSelected flag to true
      });
    }
  });

  return images; // Return the array of image information
};