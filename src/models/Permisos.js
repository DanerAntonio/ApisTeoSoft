const mongoose = require('mongoose');

const permisoSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Asegúrate de que este campo se llame 'nombre'
    descripcion: { type: String, required: true }  // Puedes hacerlo opcional si lo prefieres
});

module.exports = mongoose.model('Permiso', permisoSchema);
