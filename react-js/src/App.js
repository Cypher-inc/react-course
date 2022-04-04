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

  const fetchMovies = () => {
    fetch("https://swapi.dev/api/films/")
      .then((resposne) => {
        return resposne.json();
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
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
