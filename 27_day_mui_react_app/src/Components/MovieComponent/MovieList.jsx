import {MovieCard} from './MovieCard'
import MuiTest from './MuiTest'
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

//Redux store
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addItem } from '../../utilis_reduxtoolkit/cartSlice';



const MovieList = () => {
const[movieList,setMovieList]=useState([])
const navigate=useNavigate()

const dispatch=useDispatch()
 
useEffect(()=>{
  getMovies()
},[])

  async function getMovies(){
    const data=await fetch('https://65111d14829fa0248e3f850c.mockapi.io/movies')
    const res=await data.json()
    console.log(res)
    setMovieList(res)
  }

  const deleteMovie=async(id)=>{
    console.log(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`)
    let res=await fetch(`https://65111d14829fa0248e3f850c.mockapi.io/movies/${id}`,{method:"DELETE"})
    let data=await res.json()
    console.log(data)
    getMovies()
    
  }
  
  const handleAddItem=(movie)=>{
    console.log(movie)
    //click > displatch an action
    // dispatch() > useDispatch()
    dispatch(addItem(movie))
  }


  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"2%"}}>      
    {
      // movieList.map((element,index)=>(<MovieCard key={index} {...element} id={index}/>))

      // movieList.map((element,index)=>(<MuiTest key={index} {...element} id={index}/>))
      movieList.map((element,index)=>(<MuiTest key={element.id} {...element} id={element.id}
      deleteButton={
        <IconButton aria-label="share"
        onClick={()=>{
         deleteMovie(element.id)                       
          }}       
      >
        <DeleteForeverIcon/>
      </IconButton>
      }

      editButton={     
          <IconButton aria-label="share"
          onClick={()=>{
            navigate(`/edit/${element.id}`)          
             }} 
        >
          <EditIcon/>
        </IconButton>
        }
      
      AddItem={
        <button
        onClick={()=>handleAddItem(element)}
        >Add Item Store</button>
      }
      
      
      
      />))


    }

    </div> 
  )
}

export default MovieList


