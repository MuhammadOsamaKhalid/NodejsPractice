const path = require('path');

const express = require('express');
const adminData = require('./admin');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res) => {
    // console.log('In the next middleware');
    // console.log('Shop.js', adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop'});
});


module.exports = router;