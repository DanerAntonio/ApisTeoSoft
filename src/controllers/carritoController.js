// controllers/cartController.js
const { Product, Order } = require('../models/carrito');

const products = [
    new Product(1, 'Producto 1', 1.00, '../assets/images/producto1.jpg'),
    // Agrega más productos aquí
];

let cart = [];

// Agregar producto al carrito
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({ product, quantity: 1 });
    }
};

// Cambiar cantidad del producto en el carrito
const changeQuantity = (productId, delta) => {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += delta;
        if (cartItem.quantity < 1) {
            cart = cart.filter(item => item.product.id !== productId);
        }
    }
};

// Procesar el pedido
const processOrder = (orderData) => {
    const order = new Order(
        orderData.documentNumber,
        orderData.fullName,
        orderData.phone,
        orderData.email,
        orderData.address,
        orderData.paymentMethod,
        cart // Agregar productos del carrito a la orden
    );

    // Aquí podrías guardar la orden en una base de datos
    // Simulación de respuesta exitosa
    return { success: true, order };
};

// Exportar funciones
module.exports = {
    products,
    cart,
    addToCart,
    changeQuantity,
    processOrder,
};