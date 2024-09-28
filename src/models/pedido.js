const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },  // Manteniendo cliente como String si no necesitas referencia a un modelo
  cantidad: { type: Number, required: true },
  montoTotal: { type: Number, required: true },
  fechaDePedido: { type: Date, default: Date.now },  // Este campo se inicializa automáticamente con la fecha actual
  estadoDelPedido: { 
    type: String, 
    required: true,
    enum: ['pendiente', 'completado', 'cancelado'],  // Definiendo valores permitidos para el estado del pedido
    default: 'pendiente'  // Opcional: establece un valor por defecto si es necesario
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
