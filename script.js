/**
 * 
 * @param {Function} reducer - reducer function to handle state changes
 * @returns {Object} 
 */

function createStore(reducer) {
  let state = {count: 0}; // Initial state
    let listeners = [];

