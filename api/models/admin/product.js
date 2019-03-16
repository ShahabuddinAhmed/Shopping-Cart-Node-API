const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productTitle: { type: String, required: true },
    productCategoryName: { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDate: { type: String, required: true },
    productImage: { type: String, default: 'productImage.jpg' }
});

module.exports = mongoose.model('Products', productSchema);