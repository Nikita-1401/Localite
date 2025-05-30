//routes/upload.js

import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = express.Router();

// POST /api/upload  (field name = "file")
router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file received" });

    // choose resource_type explicitly for certain MIME types (optional)
    const type = req.file.mimetype.startsWith("video/") ? "video" : "auto";
    const cloud = await uploadOnCloudinary(req.file.path, type);

    if (!cloud) throw new Error("Cloudinary upload failed");

    res.status(201).json({
      public_id: cloud.public_id,
      url:       cloud.secure_url,
      type:      cloud.resource_type,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;


// import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import Place from "../lib/Schema.js"; // Import your Mongoose schema

// const router = express.Router();

// // POST /api/upload
// router.post("/", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: "No file received" });

//     const type = req.file.mimetype.startsWith("video/") ? "video" : "auto";
//     const cloud = await uploadOnCloudinary(req.file.path, type);

//     if (!cloud || !cloud.secure_url) {
//       throw new Error("Cloudinary upload failed");
//     }

//     // Now insert the document to MongoDB with the secure_url
//     const placeData = {
//       name: req.body.name,
//       description: req.body.description,
//       landmark: req.body.landmark,
//       location: req.body.location,
//       category: req.body.category,
//       imageUrl: cloud.secure_url // Insert secure_url from Cloudinary
//     };

//     const savedPlace = await Place.create(placeData);

//     res.status(201).json({
//       message: "Upload successful",
//       place: savedPlace
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
