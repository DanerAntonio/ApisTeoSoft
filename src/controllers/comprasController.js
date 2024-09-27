const Compras = require('../models/compras');

// Crear una compra
exports.createCompra = async (req, res) => {
  try {
    const nuevaCompra = new Compras(req.body);
    await nuevaCompra.save();
    res.status(201).json(nuevaCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las compras
exports.getCompras = async (req, res) => {
  try {
    const compras = await Compras.find().populate('clientId');
    if (!compras.length) {
      return res.status(404).json({ message: 'No se encontraron compras.' });
    }
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener compra por ID
exports.getCompraById = async (req, res) => {
  try {
    const compra = await Compras.findById(req.params.id).populate('clientId');
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una compra
exports.updateCompra = async (req, res) => {
  try {
    const compra = await Compras.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una compra
exports.deleteCompra = async (req, res) => {
  try {
    const compra = await Compras.findByIdAndDelete(req.params.id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
    res.status(200).json({ message: 'Compra eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
