import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Movies, Movie } from "./components/Movies";
import { Sidebar } from "./components/Sidebar";
import "./custom.css";


export default () => {

  const [movieList, updateMovieList] = useState<Movie[]>([]);
  const [filteredMovies, updateFilteredMovies] = useState<Movie[]>([]);
  const [genres, updateGenres] = useState<string[]>([]);

  const filterByGenre = (genre: string = "All"): void => {
    if (genre === 'All') {
      updateFilteredMovies([...movieList]);
    } else {
      updateFilteredMovies([...movieList.filter(movie => movie.genres.includes(genre))])
    }
  }

  const getMovieDB = () => {
    fetch('/movies.json')
      .then(resp => resp.json())
      .then(jsonObj => {
        updateGenres(['All', ...jsonObj.genres.sort()]);
        updateMovieList([...jsonObj.movies.sort()]);
        updateFilteredMovies([...jsonObj.movies.sort()]);
      });
  };

  useEffect(() => {
    getMovieDB();
  }, []);

  return (
    <Layout>
      <Sidebar genres={genres} filterByGenre={filterByGenre} />
      <Movies movies={filteredMovies} />
    </Layout>
  )
};
