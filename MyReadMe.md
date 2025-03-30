- **1. How to run my code.:**

Firstly because theres no ui rendering i installed an extention called Code Runner that logs the output of my code directly into the built in terminal in vsCode.
Once the extension is installed, there will be a play button in the top right hand corner of the window.
if play is pressed, VSCode will then run the code in the terminal and output the console.log

- **2. A brief overview of my approach.:**
My approach is inspired by how I've seen some people aproach in tutorials, however they did have UI rendering.
I also noticed most of the time tutorials make use of react for the Redux Store. So it was interesting implementing the logic in Vinalla JS.

The logic is fairly simple:
Weve got a create store function that takes the reducer function as an argument.

inside our function were declaring the initial count as 0 with an empty array for listeners,
next we have our get state function which returns an object of the current state,

We then have our dispatch function that takes an action object with a type property as its argument.

This function is resposible for updating the state by using the reducer function, and telling the listeners that the state has changed.

We then have the subscibe function that takes the listener function as an argument and registers it whenever a state change happens, it then stores our listener in the listeners array and returns an unsubscribe function that removes the listener when its no longer needed preventing memory leaks.

we then have our intial dispatch function with a "dummy" action to ensure the state is correctly initialized because the reducer has no case for "INIT" it returns the current state.

Our Create Store function then returns: getState,dispatch and subscribe to retrieve the current state, update the state and tracks the state changes respectively.

we then have our reducer function to handle the state changes.
it takes the state and action as inputs.
based on the action types iy returns a new state,this ensures immutability by returnin new objects rather than modifying the original state.

We then create the store with the createStore(reducer) function, this intializes the state and returns an object with getState,dispatch and subscribe functions.

We subscribe our state updates,
so whenever dispatch is called the function logs the new state.

we then test the state with the required Scenarios.

Scenario 1:
Veifies the intial state.
Scenario 2:
calls dispatch(increment) 3 times so the final count should be 3
Scenario 3:
calls dispatch(decrement)2 times so the final count should be 1
Scenario 4:
calls dispatch(reset)
 so the final count should be 0 because the count is reset



- **Challenges I faced and how I overcame them:**.
My first challenge was working without a ui, I intially wanted to add UI elements but realised this was not in the breif.

I am also not 100% proficient in using jsdoc as yet, but the more i use it the more comfortable i am getting.

the switch statement was also somewhat different to how i would usally implement logic, so i did spend a fair amount of time on documentation regarding this.