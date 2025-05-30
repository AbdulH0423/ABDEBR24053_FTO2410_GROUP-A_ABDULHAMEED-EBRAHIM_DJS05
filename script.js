/**
 * 
 * @param {Function} reducer - reducer function to handle state changes
 * @returns {Object} 
 */

function createStore(reducer) {
  let state = {count: 0}; // Initial state
    let listeners = [];

    /**
     * 
     * @returns {Object} the current state of the store
     */

    function getState() {
        return state;
    }

    /**
     * 
     * @param {Object} action - the action object containing the type of state change
     */

    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(
            function(listener){
                listener();
            });
        }

        /**
         * 
         * @param {Function} listener - the function to call when the state changes
         * @returns {Function} - A function to unsubsribe the listener
         */
    function subscribe(listener) {
        listeners.push(listener);
        return function(){
            listeners = listeners.filter(function(l){
                return l !== listener;
            });
        };
    }
    dispatch({type: "INIT"});// Initial action to set the initial state
    
    
    return {
        getState,
        dispatch,
        subscribe
    };
}


// Reducer function to handle state changes

/**
 * 
 * @param {Object} state - the current state
 * @param {Object} action - the action object with a type property
 * @returns {Object}- the new state
 */

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
    
        case "decrement":
            return { count: state.count - 1 };

         case "reset":
            return { count: 0 };
        default:
            return state;
    }
}

// Create the store

const store = createStore(reducer);

// Subscribe to store updates
store.subscribe(function(){
    console.log("Updated state:", store.getState());
});

//Intioal state verification(scenario1)

console.log("Intial state:", store.getState());// count:0

//Increment the count(scenario2)

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
console.log("Increased state:", store.getState());// count:3

//Decrement the count(scenario3)
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
console.log("Decreased state:", store.getState());// count:1


//Reset the count(scenario4)
store.dispatch({ type: "reset" });
console.log("Reset state:", store.getState());// count:0