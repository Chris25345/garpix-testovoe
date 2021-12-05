import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import SingleBook from '../SingleBook/SingleBook';
import booksAction from '../../redux/actionCreators/booksAC';
import { useEffect } from 'react';
import AddBookForm from '../AddBookForm/AddBookForm';
import EditForm from '../EditForm/EditForm';
import Authors from '../Authors/Authors';
import authorsAction from '../../redux/actionCreators/authorsAC';
import SingleAuthor from '../SingleAuthor/SingleAuthor';
import AddAuthorForm from '../AddAuthorForm/AddAuthorForm';
import EditAuthorForm from '../EditAuthorForm/EditAuthorForm';
import Main from '../Main/Main';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksAction.initBooks());
    dispatch(authorsAction.initAuthors());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/create" component={AddBookForm} />
        <Route exact path="/books/edit/:id" component={EditForm} />
        <Route exact path="/books/:id" component={SingleBook} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/authors/create" component={AddAuthorForm} />
        <Route exact path="/authors/edit/:id" component={EditAuthorForm} />
        <Route exact path="/authors/:id" component={SingleAuthor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
