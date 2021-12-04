import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={`navbar navbar-light bg-light ${s.navbar}`}>
      <Link to="/" className="navbar-brand mb-0 h1">Главная страница</Link>
      <Link to="/books" className="navbar-brand mb-0 h1">Книги</Link>
      <Link to="/authors" className="navbar-brand mb-0 h1">Авторы</Link>
    </nav>
  )
}

export default Navbar

