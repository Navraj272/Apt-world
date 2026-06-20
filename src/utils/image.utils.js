import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * Saves a base64 string as an image file.
 * @param {string} base64String - The base64 encoded image.
 * @param {string} subFolder - Optional subfolder within public/uploads.
 * @returns {string|null} - The relative URL of the saved image, or null if failed.
 */
export const saveBase64Image = (base64String, subFolder = '') => {
  if (!base64String || !base64String.includes('base64,')) {
    return null;
  }

  try {
    const parts = base64String.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const extension = contentType.split('/')[1] || 'png';
    const base64Data = parts[1];
    const buffer = Buffer.from(base64Data, 'base64');

    const fileName = `${uuidv4()}.${extension}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads', subFolder);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);

    // Return the relative URL
    return `/uploads/${subFolder ? subFolder + '/' : ''}${fileName}`;
  } catch (error) {
    console.error('Error saving base64 image:', error);
    return null;
  }
};

/**
 * Processes an array or single base64 image field.
 * @param {string|string[]} images - Single or array of base64 strings.
 * @returns {string|string[]} - Processed URLs.
 */
export const processImages = (images) => {
  if (Array.isArray(images)) {
    return images.map(img => (img.startsWith('data:') ? saveBase64Image(img, 'products') : img)).filter(Boolean);
  }
  if (typeof images === 'string' && images.startsWith('data:')) {
    return saveBase64Image(images, 'products');
  }
  return images;
};
