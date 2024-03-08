import { useState } from 'react';
import './App.css'
import { AddColor } from './Components/AddColor';

import {movie} from './utilis/constant'
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';

function App() {
  const [movieList,setMovieList]=useState(movie) 
    
  return (
    <>
        <AddColor/>
        <AddMovie movieList={movieList} setMovieList={setMovieList} />
        <MovieList movieList={movieList}/>
     </>
  )
}

export default App

//App.jsx:78 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
// at MovieCard (http://localhost:5173/src/Components/MovieCard.jsx?t=1709793802060:20:29)
// at App