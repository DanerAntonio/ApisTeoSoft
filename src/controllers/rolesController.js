const Rol = require('../models/Roles'); // Asegúrate de que sea el modelo correcto
const Permiso = require('../models/Permisos'); // Importa el modelo de permisos

// Crear un nuevo rol
exports.crearRol = async (req, res) => {
    const { nombRol, estadoRol, permisos } = req.body;

    if (!nombRol || !estadoRol || !permisos) {
        return res.status(400).json({ message: 'El nombre, estado y permisos son obligatorios' });
    }

    try {
        const nuevoRol = new Rol({ nombRol, estadoRol, permisos });
        await nuevoRol.save();

        // Utiliza populate para obtener los nombres de los permisos
        const rolConPermisos = await Rol.findById(nuevoRol._id).populate('permisos');

        res.status(201).json(rolConPermisos); // Devuelve el rol con los permisos poblados
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener Roles
exports.obtenerRoles = async (req, res) => {
    try {
        const roles = await Rol.find().populate('permisos'); // Población para obtener los permisos
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar Rol
exports.actualizarRol = async (req, res) => {
    const { id } = req.params;
    try {
        const rolActualizado = await Rol.findByIdAndUpdate(id, req.body, { new: true }).populate('permisos'); // Población para obtener los permisos
        if (!rolActualizado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json(rolActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar Rol
exports.eliminarRol = async (req, res) => {
    const { id } = req.params;
    try {
        const rolEliminado = await Rol.findByIdAndDelete(id);
        if (!rolEliminado) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }
        res.status(200).json({ message: 'Rol eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
