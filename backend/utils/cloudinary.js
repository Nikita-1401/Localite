import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;
import fs from "fs-extra";

cloudinary.config({
  cloud_name: "local-ite",
  api_key: "158588187176898",
  api_secret: "Kpl2IyN4g3K-uYGeyOwqgr1uJM",
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
