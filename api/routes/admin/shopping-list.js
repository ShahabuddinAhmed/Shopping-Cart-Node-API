const express = require('express');
const router = express.Router();
const checkAdminAuth = require('../../middleware/adminAuth');
const shoppingListController = require('../../controller/admin/shopping-list');

router.get('/all', shoppingListController.getAllShoppingList);

module.exports = router;