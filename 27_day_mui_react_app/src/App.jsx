import { useState } from 'react';
import './App.css'
import { AddColor } from './Components/MovieComponent/AddColor';

import {movie} from './utilis_movie/constant'
import AddMovie from './Components/MovieComponent/AddMovie';
import MovieList from './Components/MovieComponent/MovieList';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/MovieComponent/NotFound';
import { Navigate } from 'react-router-dom';
import MovieDetails from './Components/MovieComponent/MovieDetails';
import MainParent01 from './Components/PropDrilling/MainParent01';
import UseContextMainParent01 from './Components/UseContext/UseContextMainParent01';


function App() {
  const [movieList,setMovieList]=useState(movie) 
  // console.log(movie[2])
    
  return (
    <div>  
   
    <br/>
    
    <Navbar/>
    <Routes>
      <Route path ='/' element={<MovieList movieList={movieList}/>}/>
      <Route path='/addcolor' element={<AddColor/>}/>
      <Route path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
       
      
      {/*       
      Changed old url > new url
      > old url > /newmovie
      > new url > /addmovie 
      
      Navigate > react-router-dom
      */}
        <Route path='/newmovie' element={<Navigate replace to='/addmovie'/>}/>

        {/* task 4:  */}
        {/* <Route path='/404' element={<NotFound/>}/> */}
        {/* "*" */}

      {/* Navigation > 404 */}
      {/* 
        old path ='*'
        new path ='/404'
        */}
      {/* <Route path='*' element={<Navigate replace to='/404'/>}/> */}

      <Route path='/movies/:id' element={<MovieDetails movieList={movieList}/>}/>
      <Route path='/propdrilling' element={<MainParent01/>}/> 
      <Route path='/usecontext' element={<UseContextMainParent01/>}/> 
    </Routes>
     </div>
  )
}

export default App

//App.jsx:78 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
// at MovieCard (http://localhost:5173/src/Components/MovieCard.jsx?t=1709793802060:20:29)
// at App