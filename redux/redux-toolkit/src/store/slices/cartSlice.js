import { createSlice } from '@reduxjs/toolkit';

function findItemIndex(state, action){
  return state.findIndex((items)=>action.payload.productId === items.productId);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem: (state, action)=>{
      const existingItemIndex = findItemIndex(state, action);
      existingItemIndex !== -1? state[existingItemIndex].quantity += 1:state.push({...action.payload, quantity: 1})
    },

    cartRemoveItem: (state, action)=>{
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1)
    },

    cartIncreaseQuantity: (state, action)=>{
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },

    cartDecreaseQuantity: (state, action)=>{
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity === 1? state.splice(existingItemIndex, 1): state[existingItemIndex].quantity -= 1;
    }

  }
})

export default cartSlice.reducer;
export const {cartAddItem, cartRemoveItem, cartIncreaseQuantity, cartDecreaseQuantity} = cartSlice.actions;