import React from 'react';
import { Link } from 'react-router-dom';
import s from './Main.module.css';
import img from './img/bookshop2.jpeg'

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img src={img} alt="" />
        <div className={s.text_container}>
          <h2>Виртуальная библиотека</h2>
          <h3>Предназначена для просмотра и добавления книг и авторов</h3>
          <div className={s.container_btn}>
            <Link to="/books" className={s.btn}>Книги</Link>
            <Link to="/authors" className={s.btn}>Авторы</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
