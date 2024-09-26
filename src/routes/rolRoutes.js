const express = require('express');
const { crearRol, obtenerRoles, actualizarRol, eliminarRol } = require('../controllers/rolesController');

const router = express.Router();

router.post('/', crearRol); // Crear rol
router.get('/', obtenerRoles); // Obtener todos los roles
router.put('/:id', actualizarRol); // Actualizar rol por ID
router.delete('/:id', eliminarRol); // Eliminar rol por ID

module.exports = router;
