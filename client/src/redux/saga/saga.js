import { takeEvery, call, put } from 'redux-saga/effects';
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

function* watchActions() {
  yield takeEvery(actionTypesBooks.INIT_BOOKS_START, fetchBooks);
  yield takeEvery(actionTypesBooks.DELETE_BOOK_START, deleteBook);
  yield takeEvery(actionTypesBooks.CREATE_BOOK_START, createBook);
  yield takeEvery(actionTypesBooks.EDIT_BOOK_START, editBook);
}

export default watchActions;
