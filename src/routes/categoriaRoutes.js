const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoriaModel');

// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener una categoría por ID
router.get('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva categoría
router.post('/', async (req, res) => {
    const { nombre, descripcion } = req.body;
    const nuevaCategoria = new Categoria({ nombre, descripcion });

    try {
        const categoriaGuardada = await nuevaCategoria.save();
        res.status(201).json(categoriaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar una categoría existente
router.put('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar una categoría
router.delete('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndDelete(req.params.id);
        if (categoria) {
            res.json({ message: 'Categoría eliminada' });
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.use((req, res, next) => {
    console.log(`Método: ${req.method}, Ruta: ${req.originalUrl}`);
    next();
});


module.exports = router;
