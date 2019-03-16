const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./api/routes/user/user');
const userShoppingListRoutes = require('./api/routes/user/shopping-list');
const adminRoutes = require('./api/routes/admin/admin');
const categoryRoutes = require('./api/routes/admin/category');
const productRoutes = require('./api/routes/admin/product');
const adminShoppingListRoutes = require('./api/routes/admin/shopping-list');

mongoose.connect('mongodb://localhost:27017/ShoppingList', {
    useNewUrlParser: true,
    useCreateIndex: true
});


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRoutes);
app.use('/usershoppinglist', userShoppingListRoutes);
app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/adminshoppinglist', adminShoppingListRoutes);
app.use(express.static('public'));

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;