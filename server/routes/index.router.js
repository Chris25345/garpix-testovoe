const router = require('express').Router();
const booksRouter = require('./books.router')

router.use('/books', booksRouter)

module.exports = router;
