import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ test, content }) {
    return (
        <div className="movie">
            <div className="movies_movie">
                <h3 className="movies__title">{test}</h3>
                <h5 className="movies__year">{content}</h5>
            </div>
        </div>
    );
}
Movie.protoTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Movie;
