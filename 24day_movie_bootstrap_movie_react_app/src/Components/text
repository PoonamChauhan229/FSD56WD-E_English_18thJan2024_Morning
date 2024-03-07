import { useState } from "react"
import { Counter } from "./Counter"

export const MovieCard=({name,poster,rating,summary})=>{
    //inline css in react >object form
    //style ={{}}
    //Conditional Styles
    const ratingStyle={
        // backgroundColor:"pink"
        color: rating>8?"green":"red"
    }
    const [show,setShow]=useState(true)

    const toggleSummary={
        display: show ?"block":"none"
    }
    return(
        <>
        <div className="movieContainer">
            <img src={poster} alt="" className="moviePoster"/>

            <div className="movieSpecs">
                <h4 className="movieName" style={{color:"green",backgroundColor:"red"}}>{name}</h4>
                <button
                onClick={()=>setShow(!show)}
                >{show?"🔽":"🔼"}</button>

                {/* <button              
                onClick={()=>setShow(!show)}
                >Style🔽</button> */}


                <h4 className="movieRating" style={ratingStyle}>{rating}</h4>
            </div>    
            {/* conditional rendering */}
            { show && <p className="movieSummary">{summary}</p>} 
             {/* { show ?<p className="movieSummary">{summary}</p>:null}  */}

             {/* <p className="movieSummary"  style={toggleSummary}>{summary}</p>           */}
                
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

//if else
//if(a<20){console.log("correct")}else{console.log("incorrect")}

// ternary operator
//condition?truedata:falsedata
//a<20?"correct":"notcorrect"

