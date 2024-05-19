import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=7d0bc5e0";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="app">
      <h1>Movies4U</h1>
      <div className="search">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => fetchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NOT FOUND</h2>
        </div>
      )}
    </div>
  );
};

export default App;
