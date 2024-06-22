import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// File filter
function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}

// Initialize upload
const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single('image');

// Upload route
router.post('/', (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      console.error('Multer error:', err.message);
      return res.status(400).send({ message: err.message });
    }

    // Check if file is uploaded
    if (!req.file) {
      console.error('No file uploaded');
      return res.status(400).send({ message: 'No file uploaded' });
    }

    // Successfully uploaded
    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/${req.file.path}`,
    });
  });
});

export default router;
