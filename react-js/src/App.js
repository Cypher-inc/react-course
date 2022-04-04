import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    setIsLoading(true);

    fetch("https://swapi.dev/api/films/") //return a promise
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong..");
        }
        return response.json();
      })
      .then((data) => {
        const transformData = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            director: movieData.director,
            release: movieData.release_date,
            openingText: movieData.opening_crawl,
          };
        });
        setMovies(transformData);
      })
      .catch((error) => {
        setError(error.message);
      });
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : !isLoading && movies.length === 0 && !error ? (
          <h1>No movies found</h1>
        ) : !isLoading && error ? (
          <h1>{error}</h1>
        ) : isLoading ? (
          <h2>⏳</h2>
        ) : (
          ""
        )}
        {/* {!isLoading && movies.length === 0 && !error ? <h1>No movies found</h1> : !isLoading && error ? <h1>{error}</h1> : isLoading ? <h2>⏳</h2> : ''} */}
        {/* {isLoading && <h2>⏳</h2>} */}
        {/* {!isLoading && error && <h1>{error}</h1>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
