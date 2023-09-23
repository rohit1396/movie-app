import React, { useEffect, useState } from "react";
import "./Recommendations.css";
import { API_KEY } from "../requests";
import MovieCard from "./MovieCard";

const Recommendations = ({ movieid }) => {
  console.log(movieid);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request =
        await fetch(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=${API_KEY}&language=en-US&page=1
            `);
      const response = await request.json();
      console.log(response);
      setMovies(response.results);
      console.log(movies);
    };
    getMovies();
  }, [movieid]);

  return (
    <div className="recommendations">
      {movies.length > 0 && <h2>Movies Recommended</h2>}
      <div className="recommendation_movies">
        {movies?.map((movie) => {
          return (
            <sectionn>
              <MovieCard key={movie.id} movie={movie} />
            </sectionn>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
