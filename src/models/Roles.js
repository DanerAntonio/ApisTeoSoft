const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
    nombRol: { type: String, required: true },
    estadoRol: { type: String, required: true },
    permisos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permiso' }] // Asegúrate de que sea una referencia
});

module.exports = mongoose.model('Rol', rolSchema);
