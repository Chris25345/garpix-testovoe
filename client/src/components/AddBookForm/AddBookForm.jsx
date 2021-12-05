import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from './AddBookForm.module.css';
import useLocalStorage from '../../helpers/useLocalStorage';
import actionTypesBooks from '../../redux/actionTypes/booksAT';

const AddBookForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.list);

  const [title, setTitle] = useLocalStorage('bookTitle', '');
  const [authorId, setAuthorId] = useLocalStorage('Author', '');
  const [year, setYear] = useLocalStorage('bookYear', '');
  const [cover, setCover] = useLocalStorage('bookCover', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      title: e.target.title.value,
      authorId: e.target.authorId.value,
      year: e.target.year.value,
      cover: e.target.cover.value,
    };
    dispatch({ type: actionTypesBooks.CREATE_BOOK_START, payload: clientData });

    localStorage.clear();
    history.push('/books');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <span>Название книги</span>
          <input type="text" required name='title' placeholder='Название книги' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={s.row}>
          <span>Первая публикация</span>
          <input type="number" required name='year' placeholder='Первая публикация' value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className={s.row}>
          <span>Автор</span>
          <select required name='authorId' value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
            <option>Автор</option>
            {authors.map((el) => (
              <option value={`${el.id}`}>{`${el.first_name} ${el.last_name}`}</option>
            ))}
          </select>
        </div>
        <div className={s.row}>
          <span>Обложка книги</span>
          <input name='cover' placeholder="Ссылка" value={cover} onChange={(e) => setCover(e.target.value)}></input>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
