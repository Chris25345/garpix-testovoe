const router = require('express').Router();
const { allBooks, deleteBook, createBook, editBook } = require('../controllers/books.controller');

router.get('/', allBooks);

router.delete('/:id', deleteBook);

router.put('/edit/:id', editBook);

router.post('/create', createBook);


module.exports = router;
