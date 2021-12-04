import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksAction from '../../redux/actionCreators/booksAC';
import s from './Books.module.css';

const Books = () => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.list);
  console.log(book);
  
  useEffect(() => {
    dispatch(booksAction.initBooks());
  }, [dispatch]);

  const books = [
    { 
      id: 1,
      title: 'Matilda',
      first_name: 'Roald',
      last_name: 'Dahl',
      created_at: '10/10/10'
    },
    { 
      id: 2,
      title: 'Matilda',
      first_name: 'Roald',
      last_name: 'Dahl',
      created_at: '10/10/10'
    },
    { 
      id: 3,
      title: 'Matilda',
      first_name: 'Roald',
      last_name: 'Dahl',
      created_at: '10/10/10'
    },
    { 
      id: 4,
      title: 'Matilda',
      first_name: 'Roald',
      last_name: 'Dahl',
      created_at: '10/10/10'
    },
  ];
  return (
    <div className={s.books_main}>
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
          <div>{el.first_name}</div>
          <div>{el.last_name}</div>
          <div>{el.created_at}</div>
          <button className={`${s.open} ${s.status}`}>Посмотреть</button>
          <button className={`${s.edit} ${s.status}`}>Редактировать</button>
          <button className={`${s.delete} ${s.status}`}>Удалить</button>
        </form>
      ))}

    </div>
  )
}

export default Books
