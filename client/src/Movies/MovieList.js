import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios"


export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => this.setState({ movies: response.data }))
      .catch(err => console.log('ERR getting:', err));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

function MovieList1({ movies }) {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList1;