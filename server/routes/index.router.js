const router = require('express').Router();
const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');

router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

module.exports = router;
