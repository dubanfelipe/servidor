const express = require('express');
const couponCtrl = require('../controllers/coupon.controller');
const router = express.Router();

router.post('/createCoupon', couponCtrl.createCoupon);
router.get('/', couponCtrl.getCoupons);


module.exports = router;