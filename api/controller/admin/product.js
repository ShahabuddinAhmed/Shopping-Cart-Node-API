const mongoose = require('mongoose');
const Products = require('../../models/admin/product');

exports.getAllProduct = (req, res, next) => {
    Products.find()
    .exec()
    .then(docs => {
        if(docs.length >=1) {
            console.log("From database", docs);
            res.status(200).json(docs);
        } else {
            res.status(200).json({
                message: "Products document is empty."
            });
        }
    })
    .catch(err => {
        res.status(200).json({
            message: err
        });
    });
}

exports.addProduct = (req, res, next) => {
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        productTitle: req.body.productTitle,
        productCategoryName: req.body.productCategoryName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
        productDate: req.body.productdate,
        productImage: req.body.productImage
    });
    product
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Data successfully is added'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            error: err
        });
    });
}


exports.getOneProduct = (req, res, next) => {
    const id = req.params.productID;
    Products.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            console.log("From database", doc);
            res.status(200).json(doc);
        } else {
            res.status(200).json({
                message: "No data is found by provided ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.updateProduct = (req, res, next) => {
    const id = req.params.productID;
    Products.findById(id)
    .exec()
    .then(product => {
        if(product.length < 1) {
            return res.status(200).json({
                message: "No data is found in for update"
            });
        }

        Products.update({ _id: id }, { $set: {
            categoryName: req.body.categoryName || product.categoryName,
            productTitle: req.body.productTitle || product.categoryName,
            productCategoryName: req.body.productCategoryName || product.productCategoryName,
            productDescription: req.body.productDescription || product.productDescription,
            productPrice: req.body.productPrice || product.productPrice,
            productDate: req.body.productdate || product.productdate,
            productImage: req.body.productImage || product.productImage
        }})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Data is successfully updated"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
        
    });
}

exports.deleteProduct = (req, res, next) => {
    const id = req.params.productID;
    Products.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Data is successfully deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}