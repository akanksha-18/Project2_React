import React from 'react';
import './MoviePage.css';

function MoviePage({ movie }) {
  return (
    <div className="movie-container">
      <img src={movie.posterurl} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <div className="movie-header">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-release-date">{movie.releaseDate}</p>
        </div>
        <p className="movie-genres"><strong>Genres:</strong> {movie.genres.join(', ')}</p>
        <p className="movie-duration"><strong>Duration:</strong> {movie.duration}</p>
        <p className="movie-storyline"><strong>Description:</strong>{movie.storyline}</p>
      </div>
    </div>
  );
}

export default MoviePage;
