const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;