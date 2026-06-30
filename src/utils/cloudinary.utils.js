import cloudinaryLib from 'cloudinary';
import fs from 'fs';
import path from 'path';
import config from '../configs/app.config';

const cloudinary = cloudinaryLib.v2;

const cloudName = config.get('cloudinary.cloudName');
const apiKey = config.get('cloudinary.apiKey');
const apiSecret = config.get('cloudinary.apiSecret');

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const isConfigured = () => cloudName && apiKey && apiSecret;

const getFolder = (subfolder = '') => {
  const base = config.get('cloudinary.uploadFolder') || 'apt-world';
  return subfolder ? `${base}/${subfolder}` : base;
};

export const uploadFile = async (filePath, options = {}) => {
  if (!isConfigured()) return null;
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: getFolder(options.folder || 'products'),
      resource_type: 'image',
      ...options,
    });
    try { fs.unlinkSync(filePath); } catch (e) { /* ignore */ }
    return result.secure_url;
  } catch (error) {
    console.error('[Cloudinary] Upload failed:', error.message);
    return null;
  }
};

export const uploadProductImages = async (files) => {
  if (!files) return { thumbnail: null, images: [] };

  let thumbnail = null;
  const images = [];

  if (files.thumbnail && files.thumbnail[0]) {
    thumbnail = await uploadFile(files.thumbnail[0].path, {
      folder: 'products/thumbnails',
      transformation: [{ width: 400, height: 400, crop: 'limit', quality: 'auto' }],
    });
  }

  if (files.images && files.images.length > 0) {
    for (const file of files.images) {
      const url = await uploadFile(file.path, {
        folder: 'products',
        transformation: [{ width: 1200, height: 1200, crop: 'limit', quality: 'auto' }],
      });
      if (url) images.push(url);
    }
  }

  return { thumbnail, images };
};

/**
 * Upload locally-saved images (from base64 processing) to Cloudinary.
 * Converts a relative URL like /uploads/products/uuid.png to an absolute path
 * and uploads it. Returns the Cloudinary URL if successful, or the original
 * local URL if Cloudinary is not configured or upload fails.
 */
export const uploadLocalImageToCloudinary = async (localUrl) => {
  if (!localUrl || !localUrl.startsWith('/uploads/') || !isConfigured()) return localUrl;

  const absolutePath = path.join(process.cwd(), 'public', localUrl);
  if (!fs.existsSync(absolutePath)) return localUrl;

  const folder = localUrl.includes('/thumbnails/') ? 'products/thumbnails' : 'products';
  const url = await uploadFile(absolutePath, { folder });
  return url || localUrl;
};

export const deleteImage = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Failed to delete Cloudinary image:', error.message);
  }
};
