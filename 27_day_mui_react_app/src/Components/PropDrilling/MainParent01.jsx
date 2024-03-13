import React, { useState } from 'react'
import Parent02 from './Parent02'

const MainParent01 = () => {
  const [childName,setChildName]=useState("PropDrilling Child Name is avaible to Use!!!")
  return (
    <>
      <div>MainParent01</div>
    <Parent02 childName={childName} setChildName={setChildName}/>
    
    </>
  )
}

export default MainParent01


//MainParent01 (data) have + pass props
//  ||
//Parent02   (data)   receive props =>pass props to next level
//  ||
//Child03    (data)   receive props =>pass props
//  ||
//NewBorn04  (data)   receive props => use it