import React, { useEffect, useState } from "react";
import "./MovieDetailsPage.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import { API_KEY } from "../requests";
import Recommendations from "./Recommendations";

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let request;
      try {
        request = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${API_KEY}`
        );
        let response = await request.json();
        setMovieData(response);
      } catch (err) {
        console.log(err.message);
        alert(err);
      }
    };
    getMovies();
  }, [movieId]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <section className="moviedetailspage">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61) ), url(${base_url}${movieData?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="moviedetailspage_content">
        <h2 className="moviedetailspage_title">Title : {movieData.title}</h2>
        <br></br>
        <h3 className="moviedetailspage_desc">
          Description : {truncate(movieData?.overview, 450)}
        </h3>
        <br></br>
        <h4 className="moviedetailspage_lang">
          Language : {movieData?.original_language}
        </h4>
        <h4 className="moviedetailspage_rating">
          Rating : {Math.round(movieData?.vote_average)}
        </h4>
        <h4 className="moviedetailspage_status">
          Status : {movieData?.status}
        </h4>
        <h4 className="moviedetailspage_tagline">
          Tagline : {movieData?.tagline}
        </h4>
        <h4 className="moviedetailspage_releaseDate">
          Realeased On : {movieData?.release_date}
        </h4>
      </div>
      <div className="movie_recommendations">
        <Recommendations movieid={movieId} />
      </div>
    </section>
  );
};

export default MovieDetailsPage;
