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

const deleteBook = async (req, res) => {
  const { id } = req.body;
  try {
    await Book.destroy({
      where: {
        id,
      }
    });
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

const createBook = async (req, res) => {
  const { title, AuthorId, year, cover } = req.body;
  try {
    await Book.create({
      title,
      AuthorId,
      year,
      cover
    });
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

module.exports = { allBooks, deleteBook, createBook };
