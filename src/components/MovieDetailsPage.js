import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../requests";

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
  return <div>{movieData.overview}</div>;
};

export default MovieDetailsPage;
