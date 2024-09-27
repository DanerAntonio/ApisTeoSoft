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
app.use('/api/cliente', require('./src/routes/clienteRoutes')); //FUNCIONA
app.use('/api/usuario', require('./src/routes/usuarioRoutes')); //FUNCIONA
app.use('/api/compras', require('./src/routes/comprasRoutes')); //FUNCIONA
app.use('/api/detallecompra', require('./src/routes/detalleCompraRoutes')); //FUNCIONA
app.use('/api/categorias', require('./src/routes/categoriaRoutes')); //FUNCIONA
app.use('/api/proveedores', require('./src/routes/proveedorRoutes')); //FUNCIONA
app.use('/api/roles', require('./src/routes/rolRoutes')); //FUNCIONA
app.use('/api/ventas', require('./src/routes/ventasRoutes')); //FUNCIONA
app.use('/api/detalleventas', require('./src/routes/detalleventasRoutes')); //FUNCIONA
app.use('/api/permisos', require('./src/routes/permisosRoutes'));//FUNCIONA
app.use('/api/devoluciones', require('./src/routes/devolucionesRoutes')); 




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