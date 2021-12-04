const router = require('express').Router();
const { allBooks, deleteBook } = require('../controllers/books.controller');

router.get('/', allBooks);

router.delete('/:id', deleteBook);


module.exports = router;
