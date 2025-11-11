function myOwnCombineReducers(reducers){
    return function(state = {}, action){
        const nextState = {};
        for(const key of Object.keys(reducers)){
            nextState[key] = reducers[key](state[key], action);
        }
        return nextState;
    }
}