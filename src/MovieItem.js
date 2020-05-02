import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieItem(props) {
  return (
    <div className="movie-item">
      <div className="image-container">
        <Link
          style={{ textDecoration: "none" }}
          to={`${props.url}/${props.movie.id}`}
          key={props.movie.id}
        >
          {props.movie.poster_path === null ? (
            <img
              className="movie-image"
              src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
              alt="NoImage"
            />
          ) : (
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
              alt="Movie Poster"
            />
          )}
        </Link>
      </div>

      <div className="movie-tittle-container">
        <div className="rating">
          <FontAwesomeIcon className="star-icon-homepage" icon={faStar} />
          <span className="movie-rating-homepage">
            {props.movie.vote_average}
          </span>
        </div>
        <div className="movie-tittle">{props.movie.title}</div>
        <button onClick={() => props.addItem(props.movie)}>+ Rentlist</button>
      </div>
    </div>
  );
}

export default MovieItem;
