function myCreateStore(reducer){
    let state;
    const listeners = [];

    const store = {
        dispatch: function(action){
            state = reducer(state, action);
            listeners.forEach(listener => {
                listener();
            });
        },
        subscribe: function(listener){
            listeners.push(listener);

            return function(){
                listeners.splice(listeners.indexOf(listener), 1);
            }
        },
        getState: function(){
            return state;
        }
    };
    store.dispatch({type: '@@INIT'});
    return store;
}

export default myCreateStore;