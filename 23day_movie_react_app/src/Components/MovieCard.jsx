import { useState } from "react"
import { Counter } from "./Counter"

export const MovieCard=({name,poster,rating,summary})=>{

    const [show,setShow]=useState(true)
    return(
        <>
        <div className="movieContainer">
            <img src={poster} alt="" className="moviePoster"/>

            <div className="movieSpecs">
                <h4 className="movieName">{name}</h4>
                <button
                onClick={()=>setShow(!show)}
                >🔽</button>
                <h4 className="movieRating">{rating}</h4>
            </div>    
            {/* conditional rendering */}
            { show && <p className="movieSummary">{summary}</p>}           
                
                {/* Like  Dilike button */}
                <Counter/>

        </div>
        </>
    )
}

// Conditoinal Rendering:
// {true:display 
//  false:dont display   
// }