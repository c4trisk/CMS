const router = require('express').Router();
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../models/productModel');
const { verifyToken } = require('../authentication/auth')



// Create
router.post('/', /*verifyToken,*/ addProduct);

// Read
router.get('/', getProducts);
router.get('/:id', getProductById);

// Update
// router.put('/:id', /*verifyToken,*/ updateProduct);
router.put('/:id', updateProduct);

// Delete
router.delete('/:id', /*verifyToken,*/ deleteProduct);

module.exports = router;