import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Books from '../Books/Books';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          main
        </Route>

        <Route exact path="/books" component={Books} />

        <Route exact path="/authors">
          authors
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
