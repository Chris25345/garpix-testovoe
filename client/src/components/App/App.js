import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';
import SingleBook from '../SingleBook/SingleBook';
import booksAction from '../../redux/actionCreators/booksAC';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksAction.initBooks());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          main
        </Route>

        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={SingleBook} />

        <Route exact path="/authors">
          authors
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
