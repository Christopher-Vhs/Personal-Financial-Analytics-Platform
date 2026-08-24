const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  const allowedExtensions = [".jpg", ".jpeg", ".png"];

  if (allowedExtensions.includes(extension)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only .jpeg, .jpg and .png files are allowed"),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;