import { useState } from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddMovie = () => {
 
  const navigate=useNavigate()   
    const [moviePoster,setMoviePoster]=useState("")
    const [movieName,setMovieName]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
    const [movieTrailer,setMovieTrailer]=useState("")

    const addmovies=()=>{
      const movie={name:movieName,poster:moviePoster,rating:movieRating,summary:movieSummary,trailer:movieTrailer}
      console.log(movie)
      postMovies(movie)
      
      }
      const postMovies=async(movie)=>{
        const data=await fetch('https://65111d14829fa0248e3f850c.mockapi.io/movies/',{
          method:"POST",
          body:JSON.stringify(movie),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const res=await data.json()
        console.log(res)
      }
  return (

    <>
       {/* MUI Form Add Movie */}

    <Box sx={{width:"100%"}}>      
      <TextField 
      sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="MovieName" variant="filled" value={movieName}  onChange={(e)=>setMovieName(e.target.value)} />

      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="PosterURL" variant="filled" value={moviePoster} onChange={(e)=>setMoviePoster(e.target.value)}/>

      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
       id="filled-basic" label="Rating" variant="filled" value={movieRating}  onChange={(e)=>setMovieRating(e.target.value)}/>
      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="Summary" variant="filled" value={movieSummary}  onChange={(e)=>setMovieSummary(e.target.value)}/>

      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="Trailer" variant="filled" value={movieTrailer}  onChange={(e)=>setMovieTrailer(e.target.value)}/>

      <Button 
        sx={{
          width:"10%",
          margin:"1% 1% 1% 38%"
        }} 
      variant="contained" onClick={()=>addmovies()}>Add Movie</Button>
        
        
        

    <Button 
    sx={{
      width:"10%",
    }} 
    
    variant="contained" onClick={()=>navigate(-1)}>Back</Button>
    
    </Box>
    </>
  )
}

export default AddMovie