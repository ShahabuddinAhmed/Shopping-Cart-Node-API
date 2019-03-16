const mongoose = require('mongoose');

const shoppingListSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productTitle: { type: String, required: true },
    productCategoryName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    shoppingDate: { type: String, required: true }
});

module.exports = mongoose.model('ShoppingLists', shoppingListSchema);