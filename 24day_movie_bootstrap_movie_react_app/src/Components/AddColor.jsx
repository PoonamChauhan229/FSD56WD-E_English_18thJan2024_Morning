import { useState } from "react";

export const AddColor = () => {
    const [colorVal,setColorVal]=useState("green")

    const [colorList,setcolorList]=useState(colorVal)

    const inputStyle={
        backgroundColor:colorVal,
        color:"white"
    }

    const divStyle={
        height:"30px",
        width:"300px",
        backgroundColor:colorList
    }
    // console.log(color)


  return (
            <>
                <input type="text" name="" id="" value={colorVal} onChange={(e)=>setColorVal(e.target.value)} style={inputStyle}/>
                <button onClick={()=>{
                    console.log(colorVal)
                    setcolorList(colorVal)
                }}>Add Color</button>

        
                <div style={divStyle}></div>
            </>
        );
};
