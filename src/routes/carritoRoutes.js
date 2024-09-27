// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/carritoController');

// Obtener productos
router.get('/products', (req, res) => {
    res.json(cartController.products);
});

// Agregar producto al carrito
router.post('/cart/add', (req, res) => {
    const { productId } = req.body;
    cartController.addToCart(productId);
    res.json({ success: true, cart: cartController.cart });
});

// Cambiar cantidad de un producto
router.post('/cart/change-quantity', (req, res) => {
    const { productId, delta } = req.body;
    cartController.changeQuantity(productId, delta);
    res.json({ success: true, cart: cartController.cart });
});

// Procesar pedido
router.post('/order', (req, res) => {
    const orderResponse = cartController.processOrder(req.body);
    res.json(orderResponse);
});

module.exports = router;