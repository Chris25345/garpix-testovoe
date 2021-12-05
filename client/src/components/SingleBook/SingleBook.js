import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import s from './SingleBook.module.css';

const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books.list);
  const singleBook = books.filter((el) => el.id === +id)[0];
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img src={`${singleBook.image ? singleBook.image : null }`} alt=""
         className={`${singleBook.image ? s.row : '' }`} />
        <div className={s.row}>{singleBook.title}</div>
        <div className={s.row}>{singleBook.Author.first_name}</div>
        <div className={s.row}>{singleBook.Author.last_name}</div>
        <div className={s.row}>{singleBook.year}</div>
      </div>
    </div>
  )
}

export default SingleBook;
