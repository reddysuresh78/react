
let cartData= []
export let cartReducer= (state = cartData, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            let cp = [...state, action.payload]
       
            return cp;

        case "REMOVE_FROM_CART":
            let ap = state.filter(  (e) => e.id !== action.payload.id ) 
 
            return ap;
            //Other cases
        
        default: 
         
            return state;
    }
}
