// import { createStore } from "redux";
import myCreateStore from "./my-redux";

let reduxState = {
    post: 0,
    fname: "Md",
    lname: "Munna",
    userId: "mdmunna84880"
}

function reducer(state=reduxState, action){
    switch(action.type){
        case "post/increment" : return {...state, post: state.post + 1};
        case "post/decrement" : return {...state, post: state.post - 1};
        case "post/incrementBy": return {...state, post: state.post + action.payload};
        case "post/decrementBy": return {
            ...state,
            post: state.post-action.payload
        }
        default: return {
            ...state
        }
    }
}

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store);
const myStore = myCreateStore(reducer);
console.log(myStore);

myStore.subscribe(()=>{
    console.log(myStore.getState());
});

const unsuscribe1 = myStore.subscribe(()=>{
    console.log("Hello");
})

const unsuscribe2 = myStore.subscribe(()=>{
    console.log("World");
})

myStore.dispatch({type: "adfka"});
unsuscribe1();
myStore.dispatch({type: "post/increment"});
myStore.dispatch({type: "post/decrement"});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/incrementBy", payload: 10});
myStore.dispatch({type: "post/decrementBy", payload: 10});