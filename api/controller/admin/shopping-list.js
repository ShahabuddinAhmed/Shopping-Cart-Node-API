const mongoose = require('mongoose');
const ShoppingLists = require('../../models/admin/shopping-list');

exports.getAllShoppingList = (req, res, next) => {
    ShoppingLists.find()
    .exec()
    .then(docs => {
        if(docs.length >=1) {
            console.log("From database", docs);
            res.status(200).json(docs);
        } else {
            res.status(200).json({
                message: "Shopping Lists document is empty."
            });
        }
    })
    .catch(err => {
        res.status(200).json({
            message: err
        });
    });
}