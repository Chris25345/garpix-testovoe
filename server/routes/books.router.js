const router = require('express').Router();
const { allBooks } = require('../controllers/books.controller');

router.get('/', allBooks);


module.exports = router;
