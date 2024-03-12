import { useState } from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const AddMovie = ({movieList,setMovieList}) => {
  const navigate=useNavigate()   
    const [moviePoster,setMoviePoster]=useState("")
    const [movieName,setMovieName]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
  return (
    <div>
    <input type="text" name="" id="" placeholder='poster url'value={moviePoster} onChange={(e)=>setMoviePoster(e.target.value)} />
    <input type="text" name="" id="" placeholder='movieName' value={movieName}  onChange={(e)=>setMovieName(e.target.value)} />
    <input type="text" name="" id="" placeholder='rating' value={movieRating}  onChange={(e)=>setMovieRating(e.target.value)} />
    <input type="text" name="" id="" placeholder='summary' value={movieSummary}  onChange={(e)=>setMovieSummary(e.target.value)}/>
    <button onClick={()=>{
      const newMovie={name:movieName,poster:moviePoster,rating:movieRating,summary:movieSummary}
      console.log(newMovie)
      setMovieList([...movieList ,newMovie])
      }}
      > Add Movie</button>

    <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
    {/* Task
    navigate to home page 
    */}

  </div>
  )
}

export default AddMovie