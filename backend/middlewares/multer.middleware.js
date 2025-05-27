import multer from "multer";
import path   from "path";
import fs     from "fs-extra";

// make sure the folder exists once, when the app boots
const UPLOAD_DIR = path.resolve("./public/uploads");
fs.ensureDirSync(UPLOAD_DIR);

// 1-a  – optional: reject files you don’t want
const ALLOWED_MIME = [
  "image/jpeg", "image/png", "image/webp",
  "video/mp4",  "video/quicktime",
  "application/pdf", "application/zip"
];

function fileFilter(req, file, cb) {
  if (ALLOWED_MIME.includes(file.mimetype)) return cb(null, true);
  cb(new Error("Unsupported file type"));
}

// 1-b – disk storage **with unique filenames** to avoid collisions
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, UPLOAD_DIR),
  filename:    (_, file, cb) => {
    const ext  = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext)
                     .replace(/\s+/g, "_")         // no spaces
                     .toLowerCase();
    cb(null, `${Date.now()}_${name}${ext}`);
  }
});

// 1-c – export ready-made helpers
export const upload      = multer({ storage, fileFilter });           // one file → req.file
export const uploadMany  = multer({ storage, fileFilter }).array("files", 10); // up to 10
