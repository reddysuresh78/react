import React, { Component } from "react"
import {connect} from "react-redux"
import {bindActionCreators } from "redux"

import {addToCart, getProducts} from "../../actions/ProductActions"
import axios from "axios"

class ProductsList  extends Component {

    constructor(){
        super()
        this.apiUrl = "http://localhost:5000/wfProducts"

    }

    componentDidMount() {
        axios.get(this.apiUrl).then( (resp) => {
                console.log("Success ", resp.data);
                this.props.getProducts(resp.data);
         }, (err) => {
            console.log("GET error ", err)
        } )
    }
     
    render() {

        let output = null;

        if(this.props.products.length>0) {
            output = this.props.products.map( (product) => { 
                   return <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button className="btn btn-primary" onClick={ ()=> this.props.addToCart(product) }>Add To Cart</button> </td>
                   </tr>     
              } )
        }else{
            output = <tr><td>No Products Found.</td></tr>
        }
 

           return (
                <div>
                    <h2> List of products</h2>
                    <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                              Name  
                        </th>
                        <th>
                             Price
                        </th>
                        <th>

                            Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>{output}</tbody>
                  </table>
            
                     </div>

                 )
     }

}

function mapStateToProps(state) {

    return { products:state.productReducer}
}


function mapDispatchToProps(dispatch) {
    

    return bindActionCreators({addToCart, getProducts}, dispatch)
    
}

//The following function will return ProductsList
//Both the functions mentioned below would return objects and they can be accessed using props.
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList) 