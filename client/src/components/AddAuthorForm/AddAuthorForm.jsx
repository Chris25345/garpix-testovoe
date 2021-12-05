import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from '../AddBookForm/AddBookForm.module.css';
import useLocalStorage from '../../helpers/useLocalStorage';
import actionsTypesAuthors from '../../redux/actionTypes/authorsAT';

const AddAuthorForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useLocalStorage('firstName', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
    };
    dispatch({ type: actionsTypesAuthors.CREATE_AUTHOR_START, payload: clientData });

    localStorage.clear();
    history.push('/authors');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <span>Фамилия автора</span>
          <input type="text" required name='firstName' placeholder='Фамилия автора' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className={s.row}>
          <span>Имя автора</span>
          <input type="text" required name='lastName' placeholder='Имя автора' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default AddAuthorForm;
