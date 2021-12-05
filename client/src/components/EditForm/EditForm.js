import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import actionTypesBooks from '../../redux/actionTypes/booksAT';
import s from '../AddBookForm/AddBookForm.module.css';

const EditForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [invalid, setInvalid] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);

  const { id } = useParams();
  const books = useSelector(state => state.books.list);
  const authors = useSelector(state => state.authors.list);
  const editBook = books.filter((el) => el.id === +id)[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 4500)
      return;
    }
    if (e.target.year.value.length > 4) {
      setInvalidDate(true);
      setTimeout(() => {
        setInvalidDate(false);
      }, 4500)
      return;
    }
    const clientData = {
      id: +id,
      title: e.target.title.value,
      authorId: e.target.authorId.value,
      year: e.target.year.value,
      cover: e.target.cover.value,
    };
    dispatch({ type: actionTypesBooks.EDIT_BOOK_START, payload: clientData });

    localStorage.clear();
    history.push('/books');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        {!invalid
          ? null
          : <div class="alert alert-warning" role="alert">
            <strong>Минимальная длина названия - 3 символа</strong>
          </div>
        }
        {!invalidDate
          ? null
          : <div className="alert alert-warning" role="alert">
            <strong>Дата не может превышать 4 символа </strong>
          </div>
        }
        <div className={s.row}>
          <span>Название книги</span>
          <input type="text" required name='title' defaultValue={editBook.title} />
        </div>
        <div className={s.row}>
          <span>Первая публикация</span>
          <input type="number" required name='year' defaultValue={editBook.year} />
        </div>
        <div className={s.row}>
          <span>Автор</span>
          <select required name='authorId' defaultValue={editBook.AuthorId}>
            {authors.map((el) => (
              <option key={el.id} value={`${el.id}`}>{`${el.first_name} ${el.last_name}`}</option>
            ))}
          </select>
        </div>
        <div className={s.row}>
          <span>Обложка книги</span>
          <input name='cover' placeholder="Ссылка" defaultValue={editBook.image}></input>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;


