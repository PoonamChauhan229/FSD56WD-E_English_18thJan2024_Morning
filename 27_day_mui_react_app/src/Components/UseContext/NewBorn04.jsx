import React, { useContext } from 'react'
import namingContext from '../../utilis_usecontext/namingContext'

const NewBorn04 = () => {
  const data=useContext(namingContext)
  console.log(data)
  return (
    <>
    <div>NewBorn04 Name :{data.ctxtchildName}</div>
    <div>NewBorn04 Nickname :{data.ctxchildnickname}</div>
    </>
  )
}

export default NewBorn04