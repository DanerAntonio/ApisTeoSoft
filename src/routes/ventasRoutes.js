const express = require('express');
const {
    crearVenta,
    obtenerVentas,
    actualizarVenta,
    anularVenta
} = require('../controllers/ventasController');

const router = express.Router();

// Ruta para crear una nueva venta
router.post('/', crearVenta);

// Ruta para obtener todas las ventas
router.get('/', obtenerVentas);

// Ruta para actualizar una venta por ID
router.put('/:id', actualizarVenta);

// Ruta para anular una venta por ID
router.patch('/:id/anular', anularVenta); // Usamos PATCH para anular

module.exports = router;
