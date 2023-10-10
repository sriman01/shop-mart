import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            state.push(action.payload);
        },

        deleteFromCart(state, action){
            // console.log(action.payload.key)
            return state.filter(item => item.id != action.payload.id);
        }
    }
})

// console.log(cartSlice)

export const { addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer