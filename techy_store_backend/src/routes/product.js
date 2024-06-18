const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/product');

router.post('/', ProductController.create)
router.get('/all/computers', ProductController.getAllComputer)
router.get('/all/laptops', ProductController.getAllLaptop)
router.get('/all/phones',ProductController.getAllPhones)
router.delete('/all/computers/:id', ProductController.deleteComputer)
router.delete('/all/laptops/:id', ProductController.deleteLaptop)
router.delete('/all/phones/:id',ProductController.deletePhone)

router.put('/:id', ProductController.update)

module.exports = router;

