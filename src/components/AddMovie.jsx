import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';

const Addmovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleName = event => {
    setName(event.target.value);
  };

  const handlePrice = event => {
    setPrice(event.target.value);
  };

  const handleAddMovie = event => {
    console.log(movies);
    setMovies(prevMovies => [...prevMovies, { name: name , price: price }]);
  };

  return (
    <div>
      Name :
      <input type="text" onChange={event => handleName(event)} />
      Price :
      <input type="text" onChange={event => handlePrice(event)} />
      <button onClick={event => handleAddMovie(event)}>Add Movie</button>
    </div>
  );
};

export default Addmovie;
