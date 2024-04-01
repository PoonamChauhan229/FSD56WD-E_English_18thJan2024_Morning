import React from 'react'

export const ColorBox = ({colorList}) => {
  return (
    <>    {
        colorList.map((element,index)=><div key={index} style={{height:"30px",width:"300px",backgroundColor:element}}></div>)
    }
    </>

  )
}
