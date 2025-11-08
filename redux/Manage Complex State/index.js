const { createStore } = require("redux");
const { productList } = require("./product-list");

const initialState = {
    product: productList,
    cart: [],
    wishList: [],
}

function reducer(state = initialState, action){
    console.log(state);
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({type: "cart/addItem", payload: {productId: 1, quantity: 1}});
console.log(store);