import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
const store=configureStore({
    // it takses the slices
    //create a slice
    //reducer > slice
    reducer:{
        cart:cartSlice,
    }
})

export default store;