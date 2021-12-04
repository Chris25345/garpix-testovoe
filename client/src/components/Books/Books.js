import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import booksAction from '../../redux/actionCreators/booksAC';
import s from './Books.module.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.list);

  useEffect(() => {
    dispatch(booksAction.initBooks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.books_main}>
        <div className={s.add_book}>
          <button className={s.status}>Создать книгу</button>
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
          <form className={s.book_info} key={el.id}>
            <div>{el.title}</div>
            <div>{el.Author.first_name}</div>
            <div>{el.Author.last_name}</div>
            <div>{el.year}</div>
            <Link to={`/books/${el.id}`} className={`${s.open} ${s.status}`}>Посмотреть</Link>
            <button className={`${s.edit} ${s.status}`}>Редактировать</button>
            <button className={`${s.delete} ${s.status}`}>Удалить</button>
          </form>
        ))}
      </div>
    </div>
  )
}

export default Books
