import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;
import fs from "fs-extra";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

 
export async function uploadOnCloudinary(localPath, type = "auto") {
  if (!localPath) return null;

  try {
    const res = await cloudinary.uploader.upload(localPath, {
      resource_type: type,        // "auto" guesses; use "video" if you’re only doing videos
      folder: "my-app",           // ⚙️ put uploads in a folder (optional)
    });
    console.log("✅ Uploaded to Cloudinary →", res.secure_url);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    // always remove the temp file
    await fs.remove(localPath);
  }
}
