let reduxState = {
    post: 0,
    fname: "Md",
    lname: "Munna",
    userId: "mdmunna84880"
}

function reducer(state, action){
    switch(action.type){
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

console.log(reduxState);
reduxState = reducer(reduxState, {type: "post/incrementBy", payload: 10});
console.log(reduxState);

