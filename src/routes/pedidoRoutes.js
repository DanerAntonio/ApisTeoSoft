// routes/pedidoRoutes.js
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Ruta para crear un nuevo pedido
router.post('/pedido', pedidoController.crearPedido);

// Ruta para obtener todos los pedidos
router.get('/pedido', pedidoController.obtenerPedidos);

// Ruta para obtener un pedido por ID
router.get('/pedido/:id', pedidoController.obtenerPedidoPorId);

// Ruta para actualizar un pedido
router.put('/pedido/:id', pedidoController.actualizarPedido);

// Ruta para eliminar un pedido
router.delete('/pedido/:id', pedidoController.eliminarPedido);

module.exports = router;