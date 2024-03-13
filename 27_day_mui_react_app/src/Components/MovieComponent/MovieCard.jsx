import { useContext, useState } from 'react'
import {Counter} from './Counter'
import {useNavigate} from 'react-router-dom'
import namingContext from '../../utilis_usecontext/namingContext'
export const MovieCard=({name,poster,rating,summary,id})=>{

    const datactxt=useContext(namingContext)
    // console.log("Id is ",id)
    const navigate=useNavigate()
   const [show,setShow]=useState(true)
   const [ctxshow,setctxtShow]=useState(false)

   const ratingStyle={
    // backgroundColor:"pink"
    color: rating>8?"green":"red"
}
   
    return(
        <>   
        <div className="card m-1 ms-2 bg-dark text-white" style={{width: "19rem",height:"480px"}}>
            <img src={poster} className="card-img-top" style={{height:"300px"}} alt="..."/>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                    <h6 className="card-title">{name}</h6>
                    <h6 onClick={()=>{
                        setShow(!show)
                        setctxtShow(false)
                        }}>{show?"🔽":"🔼"}</h6>
                   
                    {/* Trailer of a movie will be displayed here */}
                    <h6 onClick={()=>navigate(`/movies/${id}`)}>ℹ</h6>
                    <h6 onClick={()=>{
                        setctxtShow(!ctxshow)
                        setShow(false)                        
                        }}>🎀</h6>                    
                    </div>
                    <div style={ratingStyle}>{rating}</div>
              </div>
                {ctxshow && <p>UseContext01:{datactxt.ctxtchildName} || UseContext02:{datactxt.ctxchildnickname} </p>}

                {show && <p className="card-text overflow-hidden" style={{height:"75px"}}>{summary}</p>}
                <Counter/>
            </div>
        </div>
        </>
    )
}

//useNavigate Hook 
// url/xyz


