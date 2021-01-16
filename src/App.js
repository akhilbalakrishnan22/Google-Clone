import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/search">
            {/* {SearchPage (the results page)} */}
            <SearchPage />
          </Route>
          <Route exact path="/">
            {/* {HOME (the one with the search on)} */}
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
