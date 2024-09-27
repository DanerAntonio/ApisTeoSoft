const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/comprasController');

router.post('/', comprasController.createCompra);
router.get('/', comprasController.getCompras);
router.put('/:id', comprasController.updateCompra);
router.delete('/:id', comprasController.deleteCompra);

module.exports = router;