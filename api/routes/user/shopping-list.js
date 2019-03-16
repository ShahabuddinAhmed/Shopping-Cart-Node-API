const express = require('express');
const router = express.Router();
const checkUserAuth = require('../../middleware/userAuth');
const shoppingListController = require('../../controller/user/shopping-list');

router.get('/all', shoppingListController.getAllShoppingList);

module.exports = router;