const { default: actionsTypesAuthors } = require("../actionTypes/authorsAT");

const initialState = {
  list: [],
  error: null,
}

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypesAuthors.INIT_AUTHORS_START:
      return {
        ...state,
        error: null,
      }
    case actionsTypesAuthors.INIT_AUTHORS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      }
    case actionsTypesAuthors.INIT_AUTHORS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case actionsTypesAuthors.DELETE_AUTHOR_START:
      return {
        ...state,
        error: null,
      }
    case actionsTypesAuthors.CREATE_AUTHOR_START:
      return {
        ...state,
        error: null,
      }
    case actionsTypesAuthors.EDIT_AUTHOR_START:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export default authorsReducer;
