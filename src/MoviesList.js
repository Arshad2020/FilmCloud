import React from "react";
import { useRouteMatch } from "react-router-dom";
import MovieItem from "./MovieItem";

function MoviesList(props) {
  const { url } = useRouteMatch();

  return (
    <div className="movie-container">
      {props.movies.map((item) => (
        <div key={item.id} className="item-box">
          <MovieItem url={url} movie={item} addItem={props.addItem} />
        </div>
      ))}
    </div>
  );
}
export default MoviesList;
