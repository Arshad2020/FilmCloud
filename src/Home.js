import React, { useState, useEffect } from "react";

import MoviesList from "./MoviesList";
import MoviePage from "./MoviePage";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Home(props) {
  const [allMovies, setAllMovies] = useState([]);
  const { path } = useRouteMatch();

  const url =
    "http://api.themoviedb.org/3/movie/popular?api_key=03d2fe94d662e5523e71720a226900bb";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllMovies(data.results));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <MoviesList movies={allMovies} addItem={props.addItem} />
        </Route>
        <Route path={`/home/:pageId`}>
          <MoviePage movies={allMovies} addItem={props.addItem} />
        </Route>
      </Switch>
    </div>
  );
}
export default Home;
