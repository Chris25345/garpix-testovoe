const { Book, Author } = require('../db/models');

const allBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: Author,
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(books)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message })
  }
}

module.exports = { allBooks };
