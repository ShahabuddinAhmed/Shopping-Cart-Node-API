const mongoose = require('mongoose');
const Categorys = require('../../models/admin/category');

exports.getAllCategory = (req, res, next) => {
    Categorys.find()
    .exec()
    .then(docs => {
        if(docs.length >=1) {
            console.log("From database", docs);
            res.status(200).json(docs);
        } else {
            res.status(200).json({
                message: "Category document is empty."
            });
        }
    })
    .catch(err => {
        res.status(200).json({
            message: err
        });
    });
}

exports.addCategoryCategory = (req, res, next) => {
    const category = new Categorys({
        _id: new mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName
    });
    category
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


exports.getOneCategory = (req, res, next) => {
    const id = req.params.categoryID;
    Categorys.findById(id)
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

exports.updateCategory = (req, res, next) => {
    const id = req.params.categoryID;
    Categorys.findById(id)
    .exec()
    .then(category => {
        if(category.length < 1) {
            return res.status(200).json({
                message: "No data is found in for update"
            });
        }

        Categorys.update({ _id: id }, { $set: {
            categoryName: req.body.categoryName || category.categoryName
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

exports.deleteCategory = (req, res, next) => {
    const id = req.params.categoryID;
    Categorys.remove({ _id: id })
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