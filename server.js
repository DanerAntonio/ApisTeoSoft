const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/roles', require('./src/routes/rolRoutes'));
app.use('/api/ventas', require('./src/routes/ventasRoutes'));
app.use('/api/detalleventas', require('./src/routes/detalleventasRoutes'));
app.use('/api/permisos', require('./src/routes/permisosRoutes'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB:', err);
    if (err.name === 'MongooseServerSelectionError') {
      console.log('No se pudo conectar a MongoDB. Verifica tu conexión a internet y la configuración del servidor.');
    }
  });
