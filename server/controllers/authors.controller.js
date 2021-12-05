const { Author } = require('../db/models');
const allAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({
      order: [['updatedAt', 'DESC']]
    });
    res.status(200).json(authors);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
}

const deleteAuthor = async (req, res) => {
  const { id } = req.body;
  try {
    await Author.destroy({
      where: {
        id,
      }
    });
    const authors = await Author.findAll({
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(authors)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message })
  }
}

const createAuthor = async (req, res) => {
  const { first_name, last_name } = req.body;
  try {
    await Author.create({
      first_name,
      last_name
    });
    const authors = await Author.findAll({
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(authors)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message })
  }
}
const editAuthor = async (req, res) => {
  const { id, first_name, last_name } = req.body;
  try {
    await Author.update(
      { first_name, last_name  },
      { 
        where: { id },
        returning: true,
      },
    );
  const authors = await Author.findAll({
    order: [['updatedAt', 'DESC']],
  });
  res.status(200).json(authors)
} catch (error) {
  console.log(error);
  res.status(404).json({ error: error.message })
}
}

module.exports = { allAuthors, deleteAuthor, createAuthor, editAuthor };
