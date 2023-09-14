import React from "react";
import "./MovieColumn.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieColumn = ({ movie }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="moviecolumn">
      <Link to={`moviedetailspage/${movie.id}`}>
        <section>
          <div>
            <LazyLoadImage
              className="movie_img"
              src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
              alt={movie?.title}
              effect="blur"
            />
          </div>
          <article className="movie_details">
            <h4 className="movie_title">
              Title : {movie?.original_title || movie?.title}
            </h4>
            <h5 className="movie_description">
              Description : {truncate(movie?.overview, 150)}
            </h5>
            <h3 className="movie_rating">
              Rating : {Math.round(movie?.vote_average)}
            </h3>
          </article>
        </section>
      </Link>
    </div>
  );
};

export default MovieColumn;
