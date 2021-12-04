import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypesBooks from '../../redux/actionTypes/booksAT';
import s from './Books.module.css';

const Books = () => {
  const books = useSelector(state => state.books.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteBook = (id) => {
    dispatch({ type: actionTypesBooks.DELETE_BOOK_START, payload: id });
    history.push('/books');
  }
  return (
    <div className={s.container}>
      <div className={s.books_main}>
        <div className={s.add_book}>
          <Link to="/create" className={`${s.add_book_button} ${s.status}`}>Создать книгу</Link>
        </div>
        <div className={s.navbar}>
          <h3>Название книги</h3>
          <h3>Фамилия автора</h3>
          <h3>Имя автора</h3>
          <h3>Первая публикация</h3>
          <h3>Посмотреть</h3>
          <h3>Редактировать</h3>
          <h3>Удалить</h3>
        </div>
        <br />

        {books.map((el) => (
          <div className={s.book_info} key={el.id}>
            <div>{el.title}</div>
            <div>{el.Author.first_name}</div>
            <div>{el.Author.last_name}</div>
            <div>{el.year}</div>
            <Link to={`/books/${el.id}`} className={`${s.open} ${s.status}`}>Посмотреть</Link>
            <button className={`${s.edit} ${s.status}`}>Редактировать</button>
            <button className={`${s.delete} ${s.status}`} onClick={() => deleteBook(el.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
