import React from 'react';
import MoviePage from '../MoviePage/MoviePage';
import moviesData from '../Movie.json';

const Movie = () => {
  return (
    <div>
      <center style={{fontSize:"35px",fontWeight:"900"}}>Movies</center>
      <div>
        {moviesData.map(movie => (
          <MoviePage key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
