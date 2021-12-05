import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const SingleAuthor = () => {
  const { id } = useParams();
  const author = useSelector(state => state.authors.list);
  const singleAuthor = author.filter((el) => el.id === +id)[0];
  return (
    <div>
      <div>{singleAuthor.first_name}</div>
      <div>{singleAuthor.last_name}</div>
    </div>
  )
}

export default SingleAuthor;
