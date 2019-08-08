import React, { useContext } from 'react';
import Movie from './Movie';

import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
