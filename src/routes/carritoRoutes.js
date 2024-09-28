// src/routes/carritoRoutes.js
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Crear un nuevo carrito
router.post('/', carritoController.crearCarrito);

// Obtener todos los carritos
router.get('/', carritoController.obtenerCarritos);

// Obtener un carrito por ID
router.get('/:id', carritoController.obtenerCarritoPorId);

// Actualizar un carrito por ID
router.put('/:id', carritoController.actualizarCarrito);

// Eliminar un carrito por ID
router.delete('/:id', carritoController.eliminarCarrito);

module.exports = router;
