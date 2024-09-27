const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetalleComprasSchema = new Schema({
    compraId: { type: Schema.Types.ObjectId, ref: 'Compra', required: true },
    productoId: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DetalleCompras', DetalleComprasSchema);