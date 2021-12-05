import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../Books/Books.module.css';
import actionsTypesAuthors from '../../redux/actionTypes/authorsAT';

const Authors = () => {
  const authors = useSelector(state => state.authors.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteAuthor = (id) => {
    dispatch({ type: actionsTypesAuthors.DELETE_AUTHOR_START, payload: id });
    history.push('/authors');
  }
  return (
    <div className={s.container}>
      <div className={s.books_main}>
        <div className={s.add_book}>
          <Link to="/authors/create" className={`${s.add_book_button} ${s.status}`}>Добавить автора</Link>
        </div>
        <div className={s.navbar}>
          <h3>Фамилия автора</h3>
          <h3>Имя автора</h3>
          <h3>Посмотреть</h3>
          <h3>Редактировать</h3>
          <h3>Удалить</h3>
        </div>
        <br />

        {authors.map((el) => (
          <div className={s.book_info} key={el.id}>
            <div>{el.first_name}</div>
            <div>{el.last_name}</div>
            <Link to={`/authors/${el.id}`} className={`${s.open} ${s.status}`}>Посмотреть</Link>
            <Link to={`/authors/edit/${el.id}`} className={`${s.edit} ${s.status}`}>Редактировать</Link>
            <button className={`${s.delete} ${s.status}`} onClick={() => deleteAuthor(el.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Authors;
