import React, { useState } from 'react'
import GameBox from './GameBox'

const Board = ({boardVal,setBoardVal}) => {
  // turn 
  const [isXturn,setIsXturn]=useState(true)
  const handleClick=(index)=>{
    console.log(index)
    //copy and update
    const boardValCopy=[...boardVal]
    if(boardValCopy[index]===null){
      // x turn otherwise 0 turn
      // isXturn ==true :X ||O
      boardValCopy[index]=isXturn
      console.log(boardValCopy[index])
      boardValCopy[index]=isXturn?"X":"O"
      console.log(boardValCopy[index])
      setBoardVal(boardValCopy)// updated the board Val
      setIsXturn(!isXturn)// true > false || false > true     

    }
  }

  // Winner
  const decideWinner=(boardVal)=>{
    const listItems=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
  
    for(let i=0;i<listItems.length;i++){
      const [a,b,c]=listItems[i]
     // console.log(a,b,c)
      if(boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c] && boardVal[a]!==null){
        console.log("winner")
        return boardVal[a]// x or b
      }
    }
    // return "drawMatch"; // drw
    return null; // drw
  }

  const winner=decideWinner(boardVal)

  return (
    <>
        <div className='board'>
        {
            boardVal.map((element,index)=><GameBox element={element} playerClick={()=>handleClick(index)} index={index}/>)
        }
        
        </div>

        {/* Winner */}
       {winner &&  <h4>Winner is : {winner}</h4>}

    
    </>
  )
}


export default Board

// 9 times