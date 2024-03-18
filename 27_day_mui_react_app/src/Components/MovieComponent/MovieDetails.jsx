import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = ({movieList}) => {
    const navigate=useNavigate()
    const {id}=useParams()
    console.log("id is ",id)
    //  console.log(movieList[id])
    // array of objects
    // movie[0] movieList[0]
    // movie[1] movieList[1]
    //movieList[id]
    const [movie,setMovie]=useState() 
    // const movie=movieList[id];
   
  // console.log('https://65111d14829fa0248e3f850c.mockapi.io/movies/'+id)
    useEffect(()=>{
      getMovies()
    },[])
  
    async function getMovies(){
      const data=await fetch('https://65111d14829fa0248e3f850c.mockapi.io/movies/'+id)
      const res=await data.json()
      console.log(res)
      setMovie(res)
       console.log(movie)
    }
    console.log(movie)
  return (
   
    // it should be wrt to that movieid 
    <>
       
       { movie && <div>
           <div>MovieDetails-{id}</div>
        <h3>{movie.name}</h3>
        {/* Trailer */}

        <iframe width="1345" height="480" src={movie.trailer} title="Youtube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h5>{movie.summary}</h5>
        <button className='btn btn-primary mb-3 px-5'
        onClick={()=>{navigate(-1)}}
        >🔙 ▶⌛▶🏡</button>
        </div>
}


    
    </>

  )
}

export default MovieDetails

// useParams
// moviename
// poster
// summary


// > trailer

//useNavigate
// const navigate=useNavigate()
// navigate('/about') > route should exists otherwise > 404 Page 
// navigate('/:id')
// navigate(-1) // 1 page behind
//navigate(1) // next page