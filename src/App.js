import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import BookDetail from "./component/Home/BookDetail";
import Home from "./component/Home/Home";
import NoMatch from "./component/NoMatch/NoMatch";
import ReadingList from "./component/ReadingList/ReadingList";
import Nav from "./Shared/Nav";






function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/book/:id">
          <BookDetail />
        </Route>
        <Route path="/reading-list">
          <ReadingList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
