import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from './AddBookForm.module.css';
import useLocalStorage from '../../helpers/useLocalStorage';

const AddBookForm = () => {
  const history = useHistory();
  const [title, setTitle] = useLocalStorage('title', '');
  const [authorName, setAuthorName] = useLocalStorage('authorName', '');
  const [year, setYear] = useLocalStorage('year', '');
  const [cover, setCover] = useLocalStorage('cover', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      title: e.target.title.value,
      authorName: e.target.authorName.value,
      year: e.target.year.value,
      cover: e.target.cover.value,
    };
    console.log(clientData);
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
          <select required name='authorName' value={authorName} onChange={(e) => setAuthorName(e.target.value)}>
            <option>Автор</option>
            <option value="Эконом">Автор 1</option>
            <option value="Комфорт">Автор 2</option>
            <option value="Люкс">Автор 3</option>
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
