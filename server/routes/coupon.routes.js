const express = require('express');
const couponCtrl = require('../controllers/coupon.controller');
const router = express.Router();

router.post('/createCoupon', couponCtrl.createCoupon);
router.get('/', couponCtrl.getCoupons);
router.get('/:id_coupon', couponCtrl.getCouponById);


module.exports = router;