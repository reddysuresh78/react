import React, { Component } from "react"
import  ProductsList   from './shopping/ProductsList'
import  CartItems   from './shopping/CartItems'

export class Home  extends Component {
     
    render() {
   
        return <div> 
                <div className="col-sm-6">
                    <ProductsList/>
                </div>
                <div className="col-sm-6">
                    <CartItems/>
                </div>
          </div>
    }

}