const redux = require("redux")

//Get reference to createStore 
const createStore = redux.createStore;

//Define reducer

let mathReducer = (state=0, action) => {
    switch (action.type) {
        case "INCREMENT" :
                return state + 1;
                break;
        case "ADD" :
                return state + action.payload;
                break;
        default:
                return state;   

    }
    // if(action.type === "INCREMENT") {
    //     return state + 1;
    // }else if(action.type === "ADD") {
    //     return state + action.payload;
    // }else{ 
    // //Send updated state
    //  return state;
    // }  
}

function increment() {
    return { type:"INCREMENT"}
}

function add(num) {
    return { type:"ADD", payload: num}
}


//Define redux app state i.e, store
let myStore = createStore(mathReducer)

console.log("Initial state in store is " + myStore.getState() )

myStore.subscribe( () => {
    console.log("State changed. Current state is ", myStore.getState())
})
 

//Dispatch action
// myStore.dispatch({ type: "INCREMENT"})

// myStore.dispatch({ type: "INCREMENT"})

// myStore.dispatch({ type: "ADD", value: 10})

myStore.dispatch(increment())
myStore.dispatch(add(12))

console.log('hello world')