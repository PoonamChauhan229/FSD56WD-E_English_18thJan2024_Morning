import { useState } from 'react';
const AddMovie = ({movieList,setMovieList}) => {   
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
  </div>
  )
}

export default AddMovie