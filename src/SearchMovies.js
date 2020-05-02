import React from "react";
import MoviesList from "./MoviesList";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./MoviePage";

function SearchMovies({ addItem, searchResult }) {
  return (
    <div>
      <Switch>
        <Route exact path="/searchmovies">
          <MoviesList movies={searchResult} addItem={addItem} />; }
        </Route>

        <Route path={`/searchmovies/:pageId`}>
          <MoviePage movies={searchResult} handleClick={addItem} />
        </Route>
      </Switch>
    </div>
  );
}

export default SearchMovies;
