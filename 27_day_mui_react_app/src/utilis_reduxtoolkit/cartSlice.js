import { createSlice } from '@reduxjs/toolkit'
const cartSlice=createSlice({
    //name:
    //initialState:
    //reducers:

    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        //action 
        //additem
        //action:()=>{}// > state,action

        addItem:(state,action)=>{
            //action.payload > data
            //state > initialstate
            state.items.push(action.payload)
        },
        clearItem:(state,action)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
            state.items.pop();
        }
    }
})
//export
//actions
export const {addItem,clearItem,removeItem}=cartSlice.actions
//reducer
export default cartSlice.reducer;