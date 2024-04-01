import React from 'react'
import { useContext } from 'react'
import userContext from '../../utilis_usecontext/userContext'

const DisplayName = () => {
  const data=useContext(userContext)
  
  return (
    <div>DisplayName- {data}</div>
  )
}

export default DisplayName