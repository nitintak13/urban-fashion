import multer from "multer";

// Storage configuration
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

// File type validation
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images are allowed"), false);
//   }
// };

// Multer upload instance
const upload = multer({ storage });

export default upload;
