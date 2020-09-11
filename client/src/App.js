import React, { useState, useEffect, Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie, { Movie1 } from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm";
import MovieCreate from "./Movies/MovieCreate"

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err.response));
  };

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>

      <Route exact path='/movies'>
        <MovieList movies={movieList} />
      </Route>

      <Route path='/movies/:id'>
        <Movie addToSavedList={addToSavedList} getMovieList={getMovieList} />
      </Route>

      <Route path='/update-movie/:id'>
        <UpdateMovieForm movieList={movieList} setMovieList={setMovieList} />
      </Route>

      <Route
        exact
        path="/movie/add"
        render={props => {
          return <MovieCreate {...props} updateMovies={getMovieList} />;
        }}
      />


    </>
  );
};


export default App;