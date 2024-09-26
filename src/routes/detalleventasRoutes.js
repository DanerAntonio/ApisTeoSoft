const express = require('express');
const {
    crearDetalleVenta,
    obtenerDetallesVentas,
    anularDetalleVenta,
    actualizarDetalleVenta
} = require('../controllers/detalleventasController');

const router = express.Router();

router.post('/', crearDetalleVenta); // Crear un nuevo detalle de venta
router.get('/', obtenerDetallesVentas); // Obtener todos los detalles de ventas
router.put('/:id', actualizarDetalleVenta); // Actualizar un detalle de venta
router.put('/anular/:id', anularDetalleVenta); // Anular un detalle de venta

module.exports = router;
