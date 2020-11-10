module.exports = app => {
    app.use('/api/v1/products', require('../routes/product.routes'));
}