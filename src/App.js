import React from 'react';
import Movie from './components/Movie';
import Nav from '../src/components/Nav';
import './App.css';
import MovieList from './components/MovieList';
import { MovieProvider } from './components/MovieContext';
import Addmovie from './components/AddMovie';

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav> </Nav>
        <MovieList> </MovieList>
        <Movie> </Movie>
        <Addmovie> </Addmovie>
      </div>
    </MovieProvider>
  );
}

export default App;
