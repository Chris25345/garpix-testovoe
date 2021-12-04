const { Book, Author } = require('../db/models');

const allBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      order: [['updatedAt', 'DESC']],
      include: Author,
    });
    res.status(200).json(books)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = { allBooks };
