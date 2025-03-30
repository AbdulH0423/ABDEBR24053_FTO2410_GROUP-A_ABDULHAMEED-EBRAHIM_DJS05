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

