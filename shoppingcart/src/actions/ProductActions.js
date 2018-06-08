export function addToCart(product){
    let orderedItem = {
        id: product.id, name:product.name, 
        price:product.price, 
        qty:1
    }
    return({type: "ADD_TO_CART" , payload:  orderedItem })
}

export function addProduct(newProduct){
    return({type: "ADD_PRODUCT" , payload:  newProduct })
}

export function deleteProduct(id){
    return({type: "DELETE_PRODUCT" , payload:  id })
}

export function updateProduct(modifiedProduct){
    console.log('Update product in actions called ' ,modifiedProduct)
    return({type: "UPDATE_PRODUCT" , payload:  modifiedProduct })
} 

export function getProducts(data){
    return({type: "GET_PRODUCTS" , payload:  data }) 
}