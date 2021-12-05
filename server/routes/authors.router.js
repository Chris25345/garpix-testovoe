const { allAuthors, deleteAuthor, editAuthor, createAuthor } = require('../controllers/authors.controller');

const router = require('express').Router();

router.get('/', allAuthors);

router.delete('/:id', deleteAuthor);

router.put('/edit/:id', editAuthor);

router.post('/create', createAuthor);

module.exports = router;
