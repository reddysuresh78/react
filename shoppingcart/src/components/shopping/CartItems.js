import React, { Component } from "react"
import {connect} from "react-redux"
import {bindActionCreators } from "redux"
import {removeFromCart} from "../../actions/CartActions"

class CartItems extends Component {

    totalAmount = () => {
        let tot = 0;
        for (let e of this.props.cartItems){
 
            tot += (e.price * e.qty  )
        }
        return tot;
    }
    render() {
        let output = null;

        if(this.props.cartItems.length>0) {
            output = this.props.cartItems.map( (cartItem) => { 
                   return <tr key={cartItem.id}>
                        <td><button className="btn btn-danger btn-xs" onClick={ () => this.props.removeFromCart(cartItem) }>X</button>  
                         &nbsp;{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                        <td>{cartItem.qty}</td>
                        <td>{cartItem.price * cartItem.qty}</td>
                   </tr>     
              } )
        }else{
            output = <tr><td>No Cart Items Found.</td></tr>
        }
        return (<div>
            <h2> Cart Items are <span className="label label-primary">   { this.props.cartItems.length} </span> </h2>
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

                            Quantity
                        </th>
                        <th>

                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {output}
                    <tr>
                        <th colSpan="3">
                            Total Amount 
                        </th>
                        <td>
                            {this.totalAmount()}
                        </td>

                    </tr>

                </tbody>
            </table>

        </div>



        )

    }

}

function mapStateToProps(state) {

    return { cartItems:state.cartReducer }
}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({removeFromCart}, dispatch)
     
}
//The following function will return ProductsList
export default connect(mapStateToProps, mapDispatchToProps)(CartItems) 