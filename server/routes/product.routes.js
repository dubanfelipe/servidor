const express = require('express');
const productCtrl = require('../controllers/product.controller');
const router = express.Router();


router.get('/', productCtrl.getProducts);

module.exports = router;