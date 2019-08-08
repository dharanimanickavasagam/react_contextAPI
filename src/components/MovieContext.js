import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Demogorgon',
      price: 3
    },
    {
      name: 'Demo-dog',
      price: 2
    },
    {
      name: 'Dart',
      price: 1
    },
    {
      name: 'ST',
      price: 10
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
