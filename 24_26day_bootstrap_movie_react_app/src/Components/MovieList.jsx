import {MovieCard} from './MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div className='d-flex flex-wrap bg-dark text-white' style={{gap:"2%"}}>      
    {
      movieList.map((element,index)=>(<MovieCard key={index} {...element} id={index}/>))
    }

    </div> 
  )
}

export default MovieList


