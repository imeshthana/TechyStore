const express = require('express');

const router = express.Router();
const MessageController = require('../controllers/message');

router.post('/', MessageController.create)
router.get('/all', MessageController.getAll)
router.delete('/:id', MessageController.delete)

module.exports = router;