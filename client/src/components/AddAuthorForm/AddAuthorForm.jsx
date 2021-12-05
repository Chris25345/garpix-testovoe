import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from '../AddBookForm/AddBookForm.module.css';
import useLocalStorage from '../../helpers/useLocalStorage';
import actionsTypesAuthors from '../../redux/actionTypes/authorsAT';

const AddAuthorForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [invalid, setInvalid] = useState(false);

  const [firstName, setFirstName] = useLocalStorage('firstName', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.firstName.value.length < 3) {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 4500)
      return;
    }
    if (e.target.lastName.value.length < 3) {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 4500)
      return;
    }
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
        {!invalid
          ? null
          : <div class="alert alert-warning" role="alert">
            <strong>Минимальная длина строки - 3 символа</strong>
          </div>
        }
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
