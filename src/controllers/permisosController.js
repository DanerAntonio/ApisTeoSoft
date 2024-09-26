const Permiso = require('../models/Permisos');

// Crear un nuevo permiso
// Crear un nuevo permiso
exports.crearPermiso = async (req, res) => {
    const { nombre, descripcion } = req.body; // Cambié 'nombrePermiso' por 'nombre'

    if (!nombre) {
        return res.status(400).json({ message: 'El nombre del permiso es obligatorio' });
    }

    try {
        const nuevoPermiso = new Permiso({ nombre, descripcion }); // Usar nombre y descripcion
        await nuevoPermiso.save();
        res.status(201).json(nuevoPermiso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los permisos
exports.obtenerPermisos = async (req, res) => {
    try {
        const permisos = await Permiso.find();
        res.status(200).json(permisos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
