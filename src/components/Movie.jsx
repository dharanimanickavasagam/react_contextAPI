import React from 'react';

const Movie = ({ name, price }) => {
  return (
    <div>
      <h6>{name} </h6>
      <p>{price} </p>
    </div>
  );
};

export default Movie;
