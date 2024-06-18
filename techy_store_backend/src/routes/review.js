const express = require('express');

const router = express.Router();
const ReviewController = require('../controllers/review');

router.post('/', ReviewController.create)
router.get('/all', ReviewController.getAll)
router.delete('/:id', ReviewController.delete)

module.exports = router;