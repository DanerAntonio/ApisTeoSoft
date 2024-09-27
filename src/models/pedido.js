// models/pedido.js
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  cantidad: { type: Number, required: true },
  montoTotal: { type: Number, required: true },
  fechaDePedido: { type: Date, default: Date.now },  // Este campo se inicializa automáticamente con la fecha actual
  estadoDelPedido: { type: String, required: true }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;