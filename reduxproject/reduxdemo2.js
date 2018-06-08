const redux = require("redux")

//Get reference to createStore 
const createStore = redux.createStore;

//Define reducer

let mathReducer = (state={count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT" :
                return {count: state.count + 1};
                break;
        case "ADD" :
                return {count: (state.count + action.payload)};
                break;
        default:
                return state;   

    }
  
}

function increment() {
    return { type:"INCREMENT"}
}

function add(num) {
    return { type:"ADD", payload: num}
}


//Define redux app state i.e, store
let myStore = createStore(mathReducer)

console.log("Initial state in store is " + myStore.getState().count )

myStore.subscribe( () => {
    console.log("State changed. Current state is ", myStore.getState())
})
  

myStore.dispatch(increment())
myStore.dispatch(add(12))

console.log('hello world')