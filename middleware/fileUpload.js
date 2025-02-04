const multer = require('multer');
const { v4: uuidv4 } = require('uuid');  // Correct import

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};

const fileUpload = multer({
    limits: { fileSize: 500000 },  // Corrected file size limit
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/images');  // Ensure this folder exists
        },
        filename: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype];
            cb(null, uuidv4() + '.' + ext);  // Correct function call
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        const error = isValid ? null : new Error('Invalid mime type!');
        cb(error, isValid);
    }
});

module.exports = fileUpload;
