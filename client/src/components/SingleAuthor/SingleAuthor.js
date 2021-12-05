import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import s from '../SingleBook/SingleBook.module.css'

const SingleAuthor = () => {
  const { id } = useParams();
  const author = useSelector(state => state.authors.list);
  const singleAuthor = author.filter((el) => el.id === +id)[0];
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.row}>{singleAuthor.first_name}</div>
        <div className={s.row}>{singleAuthor.last_name}</div>
      </div>
    </div>
  )
}

export default SingleAuthor;
