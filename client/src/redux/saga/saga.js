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

function* watchActions() {
  yield takeEvery(actionTypesBooks.INIT_BOOKS_START, fetchBooks)
}

export default watchActions;
