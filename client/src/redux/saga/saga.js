import { takeEvery, call, put } from 'redux-saga/effects';
import actionsTypesAuthors from '../actionTypes/authorsAT';
import actionTypesBooks from '../actionTypes/booksAT';

async function fetchData({
  url, method, headers, body
}) {
  const response = await fetch(url, {
    method,
    headers,
    body,
    credentials: "include",
  });
  const data = response.json();
  return data;
}

function* fetchBooks() {
  try {
    const books = yield call(fetchData, {
      url: 'http://localhost:5000/books',
    });
    yield put({ type: actionTypesBooks.INIT_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    yield put({ type: actionTypesBooks.INIT_BOOKS_ERROR, payload: error });
  }
}

function* deleteBook(action) {
  try {
    const books = yield call(fetchData, {
      url: 'http://localhost:5000/books/:id',
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: action.payload,
      })
    });
    yield put({ type: actionTypesBooks.INIT_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    yield put({ type: actionTypesBooks.INIT_BOOKS_ERROR, payload: error });
  }
}

function* createBook(action) {
  try {
    const books = yield call(fetchData, {
      url: 'http://localhost:5000/books/create',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: action.payload.title,
        AuthorId: action.payload.authorId,
        year: action.payload.year,
        image: action.payload.cover,
      })
    });
    yield put({ type: actionTypesBooks.INIT_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    yield put({ type: actionTypesBooks.INIT_BOOKS_ERROR, payload: error });
  }
}
function* editBook(action) {
  try {
    const books = yield call(fetchData, {
      url: 'http://localhost:5000/books/edit/:id',
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: action.payload.id,
        title: action.payload.title,
        AuthorId: action.payload.authorId,
        year: action.payload.year,
        image: action.payload.cover,
      })
    });
    yield put({ type: actionTypesBooks.INIT_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    yield put({ type: actionTypesBooks.INIT_BOOKS_ERROR, payload: error });
  }
}

function* fetchAuthors() {
  try {
    const authors = yield call(fetchData, {
      url: 'http://localhost:5000/authors',
    });
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_SUCCESS, payload: authors });
  } catch (error) {
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_ERROR, payload: error });
  }
}
function* deleteAuthor(action) {
  try {
    const authors = yield call(fetchData, {
      url: 'http://localhost:5000/authors/:id',
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: action.payload,
      })
    });
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_SUCCESS, payload: authors });
  } catch (error) {
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_ERROR, payload: error });
  }
}
function* createAuthor(action) {
  try {
    const authors = yield call(fetchData, {
      url: 'http://localhost:5000/authors/create',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
      })
    });
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_SUCCESS, payload: authors });
  } catch (error) {
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_ERROR, payload: error });
  }
}
function* editAuthor(action) {
  try {
    const authors = yield call(fetchData, {
      url: 'http://localhost:5000/authors/edit/:id',
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
      })
    });
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_SUCCESS, payload: authors });
  } catch (error) {
    yield put({ type: actionsTypesAuthors.INIT_AUTHORS_ERROR, payload: error});
  }
}

function* watchActions() {
  yield takeEvery(actionTypesBooks.INIT_BOOKS_START, fetchBooks);
  yield takeEvery(actionTypesBooks.DELETE_BOOK_START, deleteBook);
  yield takeEvery(actionTypesBooks.CREATE_BOOK_START, createBook);
  yield takeEvery(actionTypesBooks.EDIT_BOOK_START, editBook);

  yield takeEvery(actionsTypesAuthors.INIT_AUTHORS_START, fetchAuthors);
  yield takeEvery(actionsTypesAuthors.DELETE_AUTHOR_START, deleteAuthor);
  yield takeEvery(actionsTypesAuthors.CREATE_AUTHOR_START, createAuthor);
  yield takeEvery(actionsTypesAuthors.EDIT_AUTHOR_START, editAuthor);
}

export default watchActions;
