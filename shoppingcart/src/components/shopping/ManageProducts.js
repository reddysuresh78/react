import React, { Component } from "react"
import {connect} from "react-redux"
import {bindActionCreators } from "redux"

import {addProduct, deleteProduct, updateProduct, getProducts} from "../../actions/ProductActions"

import axios from "axios"

class ManageProducts extends Component {
 
    constructor(){
        super()
        this.apiUrl = "http://localhost:5000/wfProducts"

    }

    render() {

        let output = null;

        if(this.props.managedProducts.length>0) {
            output = this.props.managedProducts.map( (product) => { 
                   return <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button className="btn btn-danger" type="button" onClick={ () =>  this.handleDelete(product._id)} >Delete</button> &nbsp;
                         <button className="btn btn-success" type="button" onClick={ () => this.editProduct(product) }>Edit</button></td>
                   </tr>     
              } )
        }else{
            output = <tr><td>No Products Found.</td></tr>
        }

        return (
            <div>
                <h2> Products Management</h2>
                <form className="well">
                    <input type="text" ref="pid" readOnly placeholder="Product Id" />
                    <input type="text" ref="pname" placeholder="Product Name" />
                    <input type="text" ref="price" placeholder="Product Price" />
                    <button className="btn btn-primary" type="button" onClick={this.handleAdd}>Add</button>&nbsp;
                    <button className="btn btn-info" type="button" onClick={this.handleUpdate}>Update</button>
                </form>
 
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

    componentDidMount() {
        axios.get(this.apiUrl).then( (resp) => {
                console.log("Success ", resp.data);
                this.props.getProducts(resp.data);
         }, (err) => {
            console.log("GET error ", err)
        } )
    }

    handleAdd = () => {
        let newProduct = 
        { 
       
        "name": this.refs.pname.value, 
        "price": this.refs.price.value
         }

        axios.post(this.apiUrl, newProduct).then( 
        (resp) =>
        {
            console.log(resp)
            this.props.addProduct(resp.data)
        }, 
        (err) => { 
            console.log("ADD Error", err)
        }
        )
        
    }

    handleUpdate = () => {

        console.log('handle update called')
        let modifiedProduct = 
        { 
        "_id": this.refs.pid.value,
        "name": this.refs.pname.value, 
        "price": this.refs.price.value
         }

            console.log(modifiedProduct)
         axios.put(this.apiUrl + "/" + modifiedProduct._id, modifiedProduct).then( 
            (resp) =>
            {
                console.log(resp)
                this.props.updateProduct(modifiedProduct)
            }, 
            (err) => { 
                console.log("DELETE Error", err)
            }
            )
         console.log('handle update called with ' , modifiedProduct)
        
    }

    editProduct = (product) => {
        this.refs.pid.value = product._id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;
    }

    handleDelete = (id) => {
        axios.delete(this.apiUrl + "/" + id).then( 
            (resp) =>
            {
                console.log(resp)
                this.props.deleteProduct(id)
            }, 
            (err) => { 
                console.log("DELETE Error", err)
            }
            )
        
    }

}

function mapStateToProps(state) {
    return { managedProducts:state.productReducer }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addProduct, deleteProduct, updateProduct, getProducts }, dispatch)
}
 
//The following function will return ProductsList
export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts) 