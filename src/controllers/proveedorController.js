const Proveedor = require('../models/proveedorModel');

// Obtener todos los proveedores
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores: ' + error.message });
  }
};

// Obtener un proveedor por ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (proveedor) {
      res.json(proveedor);
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedor: ' + error.message });
  }
};

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  const proveedor = new Proveedor({
    nombre_compania: req.body.nombre_compania,
    persona_contacto: req.body.persona_contacto,
    correo: req.body.correo,
    telefono: req.body.telefono,
    direccion1: req.body.direccion1,
    direccion2: req.body.direccion2,
    ciudad: req.body.ciudad,
    estado: req.body.estado,
    codigo_postal: req.body.codigo_postal,
    nit: req.body.nit
  });

  try {
    const nuevoProveedor = await proveedor.save();
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear proveedor: ' + error.message });
  }
};

// Actualizar un proveedor
exports.updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (proveedor) {
      res.json(proveedor);
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar proveedor: ' + error.message });
  }
};

// Eliminar un proveedor
exports.deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (proveedor) {
      res.json({ message: 'Proveedor eliminado' });
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar proveedor: ' + error.message });
  }
};
