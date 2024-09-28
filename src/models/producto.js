const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    id_categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // Referencia a la categoría
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha_vencimiento: { type: Date, required: true },
    stock: { type: Number, default: 0 },
    precio: { type: Number, required: true },
    estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' } // Estado del producto
});

module.exports = mongoose.model('Producto', ProductoSchema);
