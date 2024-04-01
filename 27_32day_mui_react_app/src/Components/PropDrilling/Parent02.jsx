import React from 'react'
import {Child03} from './Child03'

const Parent02 = ({childName,setChildName}) => {
  return (
    <>
    <Child03 childName={childName} setChildName={setChildName}/>
    </>
  )
}

export default Parent02