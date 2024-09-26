const Venta = require('../models/Ventas'); 

// Crear una nueva venta
exports.crearVenta = async (req, res) => {
    const { idUsuario, idProducto, cantidad, precioUnitario } = req.body;

    if (!idUsuario || !idProducto || !cantidad || !precioUnitario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const precioTotal = cantidad * precioUnitario;

    try {
        const nuevaVenta = await Venta.create({ idUsuario, idProducto, cantidad, precioUnitario, precioTotal });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todas las ventas
exports.obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una venta por ID
exports.actualizarVenta = async (req, res) => {
    const { id } = req.params; // Obtener el ID de los parámetros de la ruta
    const { cantidad, precioUnitario } = req.body; // Solo permitimos actualizar estos campos

    try {
        const ventaActualizada = await Venta.findByIdAndUpdate(
            id,
            { cantidad, precioUnitario, precioTotal: cantidad * precioUnitario }, // Actualizar precioTotal
            { new: true, runValidators: true } // Devuelve el documento actualizado
        );

        if (!ventaActualizada) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }

        res.status(200).json(ventaActualizada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Anular una venta por ID
exports.anularVenta = async (req, res) => {
    const { id } = req.params;

    try {
        const ventaAnulada = await Venta.findByIdAndUpdate(
            id,
            { estado: 'anulada' }, // Cambia el estado a "anulada"
            { new: true }
        );

        if (!ventaAnulada) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }

        res.status(200).json(ventaAnulada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
