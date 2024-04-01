import { useState } from "react"
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
export const Counter=()=>{
    // const like=0 // local variable

  
    const[like,setLike]=useState(0)
    const[disLike,setDisLike]=useState(0)
    // setLike(1)
    return(
        <>  
        
        <IconButton aria-label="share"
         onClick={()=>{
            // like+1
            setLike(like+1)
            console.log(like)
            }}       
        >
          <Badge badgeContent={like} color="primary">
            <ThumbUpIcon color="action" />
          </Badge>
        </IconButton>


        <IconButton aria-label="share"
        onClick={()=>{
            // disLike+1
            setDisLike(disLike+1)
            console.log(disLike)
            }}
        
        >
        <Badge badgeContent={disLike} color="primary">
          <ThumbDownIcon color="action" />
        </Badge>
        </IconButton>
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