import actionTypesBooks from "../actionTypes/booksAT"

const booksAction = {
  initBooks: () => ({ type: actionTypesBooks.INIT_BOOKS_START }),
}

export default booksAction;
