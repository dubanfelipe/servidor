const express = require('express');
const couponCtrl = require('../controllers/coupon.controller');
const router = express.Router();

router.post('/createCoupon', couponCtrl.createCoupon);
router.get('/', couponCtrl.getCoupons);
router.get('/:id_coupon', couponCtrl.getCouponById);
router.get('/validateCoupon/:id_coupon', couponCtrl.validateCouponById);


module.exports = router;