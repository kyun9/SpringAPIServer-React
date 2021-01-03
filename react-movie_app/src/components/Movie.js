import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movies_movie">
        <h3 className="movies__title">{title}</h3>
        <h5 className="movies__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movies__summary">{summary.slice(0, 140)}...</h5>
      </div>
    </div>
  );
}
Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  yaer: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
