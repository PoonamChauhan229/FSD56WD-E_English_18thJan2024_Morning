import { useState } from "react"
export const Counter=()=>{
    // const like=0 // local variable

  
    const[like,setLike]=useState(0)
    const[disLike,setDisLike]=useState(0)
    // setLike(1)
    return(
        <>  <div className="counterContainer">
           
               {/* Like  */}
            <button 
            className="likeButton"
            onClick={()=>{
                // like+1
                setLike(like+1)
                console.log(like)
                }}>👍 {like}
            </button>

            {/* Dislike Button : 10 min*/}

            <button
            className="dislikeButton"
            onClick={()=>{
                // disLike+1
                setDisLike(disLike+1)
                console.log(disLike)
                }}>👎 {disLike}
            </button>


            </div>  
        </>
    )
}


// Hitiing the button>
// Changing the 
// react state variable

// Hook
// useState Hook:

// Hook : Function 
// useState() > returns array 

// >state setState

// const[state,setState]=useState(initialvalue)
// state > react variable > intial value
// setState > function > which will help us to update the value
// setState(1)