import React, { useState } from 'react'
import userContext from '../../utilis_usecontext/userContext'
import DisplayName from './DisplayName'

// Main Page > App.jsx > Render to the broswer
const MainApp = () => {
  const [userName,setUserName]=useState("Default User")

  return (
    <userContext.Provider value={[userName,setUserName]}>
        <div>App.jsx - Assume </div>
        {/* Routes */}
        {/*  Components*/}
        <input type="text" name="" id="" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <DisplayName/>
    </userContext.Provider>
  )
}

export default MainApp