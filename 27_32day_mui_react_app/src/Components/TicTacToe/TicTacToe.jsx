import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
const [boardVal,setBoardVal]=useState([null,null,null,null,null,null,null,null,null])
  return (
    <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
  )
}

export default TicTacToe

// Place where the Gaming Application will be rendered 
// this componnet > App.jsx, using the route 