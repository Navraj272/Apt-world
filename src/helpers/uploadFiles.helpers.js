
import { S3_FILE_PREFIX } from "@src/utils/constants/public.constants"
import { deleteFileFromS3, uploadFile } from "@src/utils/s3.utils"
import path from 'path'


const DEVICE_PREFIX = {
  desktop: "desktop",
  mobile: "mobile",
}

export const extractFiles = (files) =>
  Object.fromEntries(
    Object.keys(DEVICE_PREFIX).map((key) => [key, files?.[key]?.[0] || null])
  )

export const uploadImages = async (images, existingImages = {}, folderPath = S3_FILE_PREFIX.banner) => {
  if (!images) return {}

  const uploadedImages = {}
    const cleanFileName = (name) =>
    encodeURIComponent(name.trim().replace(/\s+/g, "_"));

  for (const [deviceType, image] of Object.entries(images)) {
    if (!image) {
      uploadedImages[deviceType] = existingImages[deviceType] || null
      continue
    }

    if (existingImages[deviceType]) {
      const key = path.join(folderPath, existingImages[deviceType]);
      try {
        await deleteFileFromS3(key)
      } catch (error) {
        console.error(`Failed to delete existing image: ${key}`, error);
      }
    }

    const { fileName } = await uploadFile(image.buffer, {
      name: `${deviceType}_${image.originalname}`,
      mimetype: image.mimetype,
      filePathInS3Bucket: folderPath,
    })

    uploadedImages[deviceType] =  cleanFileName(fileName);
  }

  return uploadedImages
}
