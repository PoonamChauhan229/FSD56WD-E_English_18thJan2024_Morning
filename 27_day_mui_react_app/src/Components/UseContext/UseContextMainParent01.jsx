import React, { useState } from 'react'
import Parent02 from './Parent02'

const UseContextMainParent01 = () => {
   return (
    <>
      <div>UseContextMainParent01</div>
    <Parent02/>
    
    </>
  )
}

export default UseContextMainParent01


//UseContextMainParent01 (data) have 
//  ||
//Parent02   
//  ||
//Child03    
//  ||
//NewBorn04  (data)   receive => use it


// useContext > Hook > React
// centrailised store > data > use 

//Steps:

// Just , You want to use the data

//1- createContext > provide the data
//2- useContext >  provide the context which is been created || store accessiblity 


// data, u want to modify
//1- createContext
//2- provide the Context 
//3- useContext


//create it inside an utilis folder

