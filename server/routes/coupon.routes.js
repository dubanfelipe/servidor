const express = require('express');
const couponCtrl = require('../controllers/coupon.controller');
const router = express.Router();

router.post('/createCoupon', couponCtrl.createCoupon);

module.exports = router;