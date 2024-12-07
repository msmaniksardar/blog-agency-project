import multer from 'multer';

// Configure multer storage
const storage = multer.diskStorage({

    filename: (req, file, callback) => {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`;
        callback(null, uniqueSuffix); // Set a unique filename
    }
});

// Create the upload middleware
const upload = multer({ storage });

// Export the middleware function
export const uploadFile = upload.single('image');
