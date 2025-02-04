// const express = require("express");

// const productsController = require("../controllers/productsController");
// const router = express.Router();

// // const fileUpload = require('../middleware/fileUpload');
// const verifyToken = require('../middleware/verifyToken');



// router.post('/addproduct',verifyToken,productsController.createProduct);
// module.exports = router;



const express = require("express");
const productsController = require("../controllers/productsController");
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

// Correct middleware order: verifyToken first, then upload, then createProduct
router.post('/addproduct', verifyToken, productsController.upload.single('image'), productsController.createProduct);
router.get('/:pid/users', productsController.getProductById);
router.delete('/:pid', verifyToken, productsController.deleteProduct);
module.exports = router;
