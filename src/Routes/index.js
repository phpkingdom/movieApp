/* Routes / index.js */
import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import Home from "../Views/Home";
import Movies from "../Views/Movies";
import Characters from "../Views/Characters";
import Species from "../Views/Species";

class MovieApp extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRedirect to="movies" />
          <Route path="movies" component={Movies} />
          <Route path="characters" component={Characters} />
          <Route path="species" component={Species} />
        </Route>
      </Router>
    );
  }
}
export default MovieApp;
