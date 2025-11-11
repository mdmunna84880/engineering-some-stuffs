const { createStore, combineReducers } = require("redux");
const { default: productReducer } = require("./productReducer");
const { default: cartReducer, cartAddItem, cartIncreaseQuantity, cartDecreaseQuantity, cartRemoveItem } = require("./cartReducer");
const { default: wishListReducer, wishListAddItem, wishListRemoveItem } = require("./wishListReducer");

const reducer = combineReducers({
    product: productReducer, 
    cartItems: cartReducer, 
    wishLists: wishListReducer
});

// const reducer = myOwnCombineReducers({
//     product: productReducer, 
//     cartItems: cartReducer, 
//     wishLists: wishListReducer
// })

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch(cartAddItem(2));
store.dispatch(cartAddItem(5));
store.dispatch(cartAddItem(6));
store.dispatch(cartAddItem(9));
store.dispatch(cartAddItem(2));
store.dispatch(cartAddItem(12));
store.dispatch(cartAddItem(13));

store.dispatch(cartIncreaseQuantity(2));
store.dispatch(cartIncreaseQuantity(6));
store.dispatch(cartIncreaseQuantity(5));
store.dispatch(cartIncreaseQuantity(9));
store.dispatch(cartIncreaseQuantity(2));

store.dispatch(cartDecreaseQuantity(2))
store.dispatch(cartDecreaseQuantity(2))
store.dispatch(cartDecreaseQuantity(2))

store.dispatch(cartRemoveItem(13));


store.dispatch(wishListAddItem(15));
store.dispatch(wishListAddItem(19));
store.dispatch(wishListAddItem(11));

store.dispatch(wishListRemoveItem(11));