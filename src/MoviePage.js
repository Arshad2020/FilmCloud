import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";

function MoviePage(props) {
  const { pageId } = useParams();
  const thisPage = props.movies.find((item) => item.id == pageId);

  if (!thisPage) {
    return null;
  }

  return (
    <div className="movie-details-page">
      <div className="movie-details-page-poster">
        <img
          className="movie-details-image"
          src={`https://image.tmdb.org/t/p/w500${thisPage.poster_path}`}
          alt="Movie Poster"
        />
      </div>

      <section className="movie-details-section">
        <div className="title-div">
          <h1 className="movie-details-page-tittle">{thisPage.title}</h1>
          <span className="release-date">
            ({new Date(thisPage.release_date).getFullYear()})
          </span>
        </div>

        <div className="sub-info">
          <FontAwesomeIcon className="star-icon-details-page" icon={faStar} />
          <span className="vote-average-details-page">
            {thisPage.vote_average}
          </span>
          <span className="vote-count-details-page">
            {`(${thisPage.vote_count})`} Reviews
          </span>

          <span className="original-language">{`Language (${thisPage.original_language})`}</span>
        </div>

        <div className="summary-div">
          <h3 className="overview-title">overview</h3>
          <p className="movie-summary">{thisPage.overview}</p>
        </div>

        <div className="movie-page-button">
          <button>Rent $6.99</button>
          <button onClick={() => props.addItem(thisPage)}>
            Add to Rentlist
          </button>
        </div>
      </section>
    </div>
  );
}
export default MoviePage;
