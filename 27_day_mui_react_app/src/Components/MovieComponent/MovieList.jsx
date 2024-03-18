import {MovieCard} from './MovieCard'
import MuiTest from './MuiTest'

const MovieList = ({movieList}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"2%"}}>      
    {
      // movieList.map((element,index)=>(<MovieCard key={index} {...element} id={index}/>))

      // movieList.map((element,index)=>(<MuiTest key={index} {...element} id={index}/>))
      movieList.map((element,index)=>(<MuiTest key={index} {...element} />))


    }

    </div> 
  )
}

export default MovieList


