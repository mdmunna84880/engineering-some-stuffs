
// ? Action types
const WISHLIST_ADD_ITEM= "wishLists/addItem";
const WISHLIST_REMOVE_ITEM = "wishLists/removeItem";

// ? Action Creators
export function wishListAddItem(productId){
  return {type: WISHLIST_ADD_ITEM, payload: {productId}}
}
export function wishListRemoveItem(productId){
  return {type: WISHLIST_REMOVE_ITEM, payload: {productId}}
}

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishList) => action.payload.productId !== wishList.productId
      );
    default:
      return state;
  }
}
