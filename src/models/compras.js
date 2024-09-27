const mongoose = require('mongoose');

const comprasSchema = new mongoose.Schema({
    numeroCompra: { type: String, required: true },
    numeroFactura: { type: String, required: true },
    proveedor: { type: String, required: true },
    montoTotal: { type: Number, required: true },
    fechaCompra: { type: Date, default: Date.now },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' } // Asumiendo que tienes una colección de clientes
});

module.exports = mongoose.model('Compras', comprasSchema);