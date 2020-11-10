module.exports = app => {
    app.use('/api/v1/coupons', require('../routes/coupon.routes'));
}