const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre_compania: { type: String, required: true }, // Nombre de la compañía del proveedor
  persona_contacto: { type: String, required: true }, // Persona de contacto
  correo: { type: String, required: true }, // Email
  telefono: { type: String, required: true }, // Número de teléfono
  direccion1: { type: String, required: true }, // Dirección
  direccion2: { type: String }, // Dirección #2 (Opcional)
  ciudad: { type: String, required: true }, // Ciudad
  estado: { type: String, required: true }, // Estado / Provincia
  codigo_postal: { type: String, required: true }, // Código Postal
  nit: { type: String, required: true } // NIT de la empresa
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
