// vite.config.js
const { resolve } = require('path')

module.exports = {
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                info: resolve(__dirname, 'info.html'),
                productOverview: resolve(__dirname, 'product-overview.html'),
                product: resolve(__dirname, 'product.html'),
                shoppingCart: resolve(__dirname, 'shopping-cart.html') 
            }
        }
    }
}