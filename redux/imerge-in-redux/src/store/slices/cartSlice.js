import {produce} from "immer";

//? Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// ? Action Creator
export function cartAddItem(productData){
  return {type: CART_ADD_ITEM, payload: productData};
}

export function cartRemoveItem(productId){
  return {type: CART_REMOVE_ITEM, payload: {productId}};
}

export function cartIncreaseQuantity(productId){
  return {type: CART_INCREASE_QUANTITY, payload: {productId}};
}

export function cartDecreaseQuantity(productId){
  return {type: CART_DECREASE_QUANTITY, payload: {productId}};
}

// ? Reducer
export default function cartReducer(OrgState = [], action) {
  return produce(OrgState, (state)=>{
    const existingItemIndex = state.findIndex((items)=>action.payload.productId === items.productId);
    switch (action.type) {
    case CART_ADD_ITEM: existingItemIndex !== -1? state[existingItemIndex].quantity += 1:state.push({...action.payload, quantity: 1});
    break;
    case CART_REMOVE_ITEM: state.splice(existingItemIndex, 1);
    break;
    case CART_INCREASE_QUANTITY: state[existingItemIndex].quantity += 1;
    break;
    case CART_DECREASE_QUANTITY: state[existingItemIndex].quantity === 1? state.splice(existingItemIndex, 1): state[existingItemIndex].quantity -= 1;
    break;
    default: state;
  }
  })
}