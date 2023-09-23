import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { GlobalMovie } from "../MovieContext";
import { API_KEY } from "../requests";
import MovieColumn from "./MovieColumn";

const SearchPage = () => {
  const { query } = GlobalMovie();
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="searchpage">
      {query && (
        <h3 className="searchpage_title">{`search results for ${query}`}</h3>
      )}
      {movie.length !== 0 ? (
        movie?.map((movie) => {
          return (
            <section>
              <MovieColumn key={movie?.id} movie={movie} />
            </section>
          );
        })
      ) : !query ? (
        <h3 className="searchpage_title">
          {`No Movies to show , search for query`}
        </h3>
      ) : (
        <h3 className="searchpage_title">
          {`No Movies to display for ${query}`}
        </h3>
      )}
    </div>
  );
};

export default SearchPage;
