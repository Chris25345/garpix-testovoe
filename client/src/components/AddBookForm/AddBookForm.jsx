import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from './AddBookForm.module.css';
import useLocalStorage from '../../helpers/useLocalStorage';
import actionTypesBooks from '../../redux/actionTypes/booksAT';

const AddBookForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useLocalStorage('title', '');
  const [authorId, setAuthorId] = useLocalStorage('authorName', '');
  const [year, setYear] = useLocalStorage('year', '');
  const [cover, setCover] = useLocalStorage('cover', '');

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
            <option value="1">Автор 1</option>
            <option value="2">Автор 2</option>
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
