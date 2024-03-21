import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem, removeItem } from '../../utilis_reduxtoolkit/cartSlice'

const Cart = () => {
const cartItems=useSelector(store=>store.cart.items)
console.log(cartItems)

const dispatch=useDispatch()

const handleClearCart=()=>{
    dispatch(clearItem())
}

const handleRemoveOneItem=()=>{
    dispatch(removeItem())
}
  return (
    <>
    <div>Cart-{cartItems.length}
    <button onClick={()=>handleClearCart()}>Clear Cart</button>
    <button onClick={()=>handleRemoveOneItem()}>Remove 1 Item-Cart</button>
    </div>
    <div className='d-flex flex-wrap'>
    {cartItems.map((element,index)=><CartCard {...element}/>)}
    </div>
  
    
    </>
  )
}

export default Cart


const CartCard=({name,rating,poster,summary})=>{
    const [show,setShow]=useState(true)
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
                        }}>{show?"🔽":"🔼"}</h6>
                   
                    {/* Trailer of a movie will be displayed here */}
                  
                   

                                       
                    </div>
                    <div style={ratingStyle}>{rating}</div>
              </div>              

                {show && <p className="card-text overflow-hidden" style={{height:"75px"}}>{summary}</p>}
            </div>
        </div>
        </>
    )
}


