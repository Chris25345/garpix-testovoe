const router = require('express').Router();
const { allBooks, deleteBook, createBook } = require('../controllers/books.controller');

router.get('/', allBooks);

router.delete('/:id', deleteBook);

router.post('/create', createBook);


module.exports = router;
