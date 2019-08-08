import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = props => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h2> Dev : Dharani </h2>
      <h6> No of Movies : {movies.length} </h6>
    </div>
  );
};

export default Nav;
