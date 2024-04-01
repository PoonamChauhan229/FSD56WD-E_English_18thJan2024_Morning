import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const EditMovie = () => {
  const [movie,setMovie]=useState(null)
  const {id}=useParams() 
  useEffect(()=>{
    getSingleMovie()
  },[]) 
    

  const getSingleMovie=async()=>{
      const data=await fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`)
      const res=await data.json()
     // console.log(res)
      setMovie(res)
    }
     
  return (
    <>

   {
    movie ? <EditMovieForm movie={movie}/>:"Loading...."
   }
    </>
  )
}

//another component
const EditMovieForm=({movie})=>{
  const navigate=useNavigate()
    const [moviePoster,setMoviePoster]=useState(movie.poster)
    const [movieName,setMovieName]=useState(movie.name)
    const [movieRating,setMovieRating]=useState(movie.rating)
    const [movieSummary,setMovieSummary]=useState(movie.summary)
    const [movieTrailer,setMovieTrailer]=useState(movie.trailer)

    // update on baisis id
    const updateMovie=(id)=>{
      const movie={name:movieName,poster:moviePoster,rating:movieRating,summary:movieSummary,trailer:movieTrailer}
      console.log(movie)
      updateMoviesdata(movie,id)  
      }
      const updateMoviesdata=async(movie,id)=>{       
        const data=await fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`,{
          method:"PUT",
          body:JSON.stringify(movie),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const res=await data.json()
        console.log(res)
      }
  return(
    <>
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
    variant="contained" onClick={()=>updateMovie(movie.id)}>Update Movie</Button>
      
      
      

  <Button 
  sx={{
    width:"10%",
  }} 
  
  variant="contained" onClick={()=>navigate(-1)}>Back</Button>
  
      </Box>
    </>
  )
}