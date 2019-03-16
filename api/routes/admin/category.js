const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const categoryController = require('../../controller/admin/category');

router.get('/all', categoryController.getAllCategory);
router.post('/addcategory', categoryController.addCategoryCategory);
router.get('/:categoryID', categoryController.getOneCategory);
router.patch('/update/:categoryID', categoryController.updateCategory);
router.delete('/delete/:categoryID', categoryController.deleteCategory);

module.exports = router;