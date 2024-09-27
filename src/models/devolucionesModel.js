// models/Return.js
const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
    cedula: { type: String, required: true },
    codigo_barras: { type: String, required: true },
    nombre_producto: { type: String, required: true },
    fecha_compra: { type: Date, required: true },
    fecha_devolucion: { type: Date, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    monto_total: { type: Number, required: true },
    motivo: { type: String, required: true },
    estado_envio: { type: String, required: true },
    estado_pedido: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Return', returnSchema);