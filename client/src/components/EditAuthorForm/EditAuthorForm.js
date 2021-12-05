import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import actionsTypesAuthors from '../../redux/actionTypes/authorsAT';
import s from '../AddBookForm/AddBookForm.module.css';

const EditAuthorForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const authors = useSelector(state => state.authors.list);
  const editAuthor = authors.filter((el) => el.id === +id)[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      id: +id,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
    };
    dispatch({ type: actionsTypesAuthors.EDIT_AUTHOR_START, payload: clientData });

    localStorage.clear();
    history.push('/authors');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <span>Фамилия автора</span>
          <input type="text" required name='firstName' defaultValue={editAuthor.first_name}/>
        </div>
        <div className={s.row}>
          <span>Имя автора</span>
          <input type="text" required name='lastName' defaultValue={editAuthor.last_name}/>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthorForm;


