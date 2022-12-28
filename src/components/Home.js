import React from "react";
import "./Home.css";
import MovieRow from "./MovieRow";
import requests from "../requests";
import MovieCover from "./MovieCover";

const Home = () => {
  return (
    <div className="home">
      <MovieCover />
      <MovieRow
        title="Neflix Originals"
        fetchUrl={requests.fetchNetflixoriginals}
        isLarge={true}
      />
      <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <MovieRow
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
};

export default Home;
