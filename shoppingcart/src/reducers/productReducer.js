let productsData = [
    // { "id": 1, "name" : "Pixel", "price" : 50000  }, 
    // { "id": 2, "name" : "Samsung", "price" : 30000  }, 
    // { "id": 3, "name" : "Motorola", "price" : 20000  } 
]

export let productReducer = ( state = productsData, action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload];
        case "DELETE_PRODUCT":
            let idx = state.findIndex( (e) => e._id === action.payload   )
            return [...state.slice(0,idx) , ...state.slice(idx+1)]
        case "UPDATE_PRODUCT":
            let oldidx = state.findIndex( (e) => e._id === action.payload._id )
            return [...state.slice(0,oldidx) , action.payload,  ...state.slice(oldidx+1)]
        case "GET_PRODUCTS":
            return action.payload
        case "ADD_TO_CART":
            let ap = state.filter(  (e) => e._id !== action.payload._id ) 
            return ap;
        case "REMOVE_FROM_CART":
            let cp = [...state, action.payload]
 
            return cp;
        //Other cases
        default: 
            return state;
    }
    
}

