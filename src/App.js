import React, { useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=7d0bc5e0";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZmVkNDc3YjQtZDMzOS00MTNjLTljNzUtZDhjYWQxMmVlNjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
  Title: "Batman: The Animated Series",
  Type: "series",
  Year: "1992–1995",
  imdbID: "tt0103359",
};

const App = () => {
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    fetchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>Movies4U</h1>
      <div className="search">
        <input placeholder="Search..." value="superman" onChange={() => {}} />
        <img src="" alt="search" onClick={() => {}} />

        <div className="container">
          <MovieCard movie1={movie1} />
        </div>
      </div>
    </div>
  );
};

export default App;
