import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books.list);
  const singleBook = books.filter((el) => el.id === +id)[0];
  return (
    <div>
      <div>{singleBook.title}</div>
      <div>{singleBook.Author.first_name}</div>
      <div>{singleBook.Author.last_name}</div>
      <div>{singleBook.year}</div>
    </div>
  )
}

export default SingleBook;
