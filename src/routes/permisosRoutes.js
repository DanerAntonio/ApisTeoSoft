const express = require('express');
const { crearPermiso, obtenerPermisos } = require('../controllers/permisosController');

const router = express.Router();

router.post('/', crearPermiso); // Crear permiso
router.get('/', obtenerPermisos); // Obtener todos los permisos

module.exports = router;
