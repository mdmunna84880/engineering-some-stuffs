
//? Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// ? Action Creator
export function cartAddItem(productId, quantity = 1){
  return {type: CART_ADD_ITEM, payload: {productId, quantity}};
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
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];

    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => action.payload.productId !== cartItem.productId
      );

    case CART_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    case CART_DECREASE_QUANTITY:
      return state.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem.quantity > 0);
    default:
      return state;
  }
}
