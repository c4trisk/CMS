const router = require('express').Router();
const { addOrder, getOrderById, getOrdersByUser, addToExistingOrder, getOrders, updateOrder } = require('../models/orderModel');
const { verifyToken, checkAdmin } = require('../authentication/auth')


// Create
// router.post('/', verifyToken, addOrder)
router.post('/', addOrder)


// Read
router.get('/', getOrders)
// router.get('/', verifyToken, checkAdmin, getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrdersByUser)

// Update
router.put('/:id', updateOrder)


module.exports = router;
