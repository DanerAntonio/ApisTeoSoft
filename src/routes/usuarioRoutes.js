// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');

// Rutas para usuarios
router.post('/', userController.createUser); // Crear usuario
router.get('/', userController.getUsers); // Obtener usuarios
router.put('/:id', userController.updateUser); // Actualizar usuario
router.delete('/:id', userController.deleteUser); // Eliminar usuario

module.exports = router;
