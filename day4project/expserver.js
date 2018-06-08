let express = require('express')

let bodyparser = require('body-parser')
let app = express()

let products = require('./data')

app.use(bodyparser.json())

app.get("/api/wsproducts", (request, response) => {
    response.json(products)
})

app.post("/api/wsproducts", (request, response) => {

    let product = {
            "id": products.length + 1,
            "name": request.body.name,
            "price": request.body.price,
            "description": request.body.description
    }
    products.push(product);

    console.log(products)
    response.json(product)
})
 

app.get("/api/wsproducts/:id", (request, response) => {
    const requestId = request.params.id;
    let product = products.filter(product=> product.id == requestId)

    if(product.length == 0) {
        response.json({'message':"Product " + requestId   + " not found"})
    }

    response.json(product)
})

app.delete("/api/wsproducts/:id", (request, response) => {
    const requestId = request.params.id;

    let idx = products.findIndex( (e) => e.id == requestId )

    products.splice(idx, 1)

    // let product = products.filter(product=> product.id != requestId)

    // if(product.length == 0) {
    //     response.json({'message':"Product " + requestId   + " not found"})
    // }

    // response.json(product)
    response.json({ "message" : "Product deleted" })

})

app.put("/api/wsproducts/:id", (request, response) => {
    const requestId = request.params.id;

    let idx = products.findIndex( (e) => e.id == requestId )

    let modifiedproduct = {
        "id": requestId,
        "name": request.body.name,
        "price": request.body.price
    }

    products[idx] = modifiedproduct

    response.json(modifiedproduct)

})

app.listen(5000, ()=>{
    console.log('started ')
})