const express = require('express');

const router = express.Router();
const CartItemController = require('../controllers/cartItem');

router.post('/', CartItemController.addToCart)
router.get('/all', CartItemController.getAll)
router.delete('/:id', CartItemController.delete)

module.exports = router;

