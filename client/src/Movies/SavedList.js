import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList1 = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      return (
        <NavLink
          to={`/movies/${movie.id}`}
          key={movie.id}
          activeClassName="saved-active"
        >
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      );
    })}
    <div className="home-button" style={{ marginLeft: '570px' }}>
      <Link to="/movie/add">Add A Movie</Link>
    </div>
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList1;

export function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>

        );

      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

