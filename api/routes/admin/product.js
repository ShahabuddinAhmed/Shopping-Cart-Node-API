const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const productController = require('../../controller/admin/product');

router.get('/all', productController.getAllProduct);
router.post('/addproduct', productController.addProduct);
router.get('/:productID', productController.getOneProduct);
router.patch('/update/:productID', productController.updateProduct);
router.delete('/delete/:productID', productController.deleteProduct);

module.exports = router;