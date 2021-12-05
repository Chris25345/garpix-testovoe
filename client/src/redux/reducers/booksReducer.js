import actionTypesBooks from "../actionTypes/booksAT";

const initialState = {
  list: [],
  error: null,
}
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesBooks.INIT_BOOKS_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesBooks.INIT_BOOKS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      }

    case actionTypesBooks.INIT_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case actionTypesBooks.CREATE_BOOK_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesBooks.DELETE_BOOK_START:
      return {
        ...state,
        error: null,
      }
    case actionTypesBooks.EDIT_BOOK_START:
      return {
        ...state,
        error: null,
      }

    default:
      return state;
  }
}

export default booksReducer;
