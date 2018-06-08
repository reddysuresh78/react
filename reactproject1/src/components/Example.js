import React, { Component } from "react"
import PropTypes from "prop-types"


export default class Friends extends Component {
    render() {

        let output = null;
        if(this.props.names !== undefined){
            output = this.props.names.map((e, i) => {
                return <li key={i}>{e}</li>
            }) 

        }else{
            output= <li>No Data</li> //[] can also be given
        }
 
        return ( 
            <div>

                  <h1>This is from child</h1>
                <ul>{output}
                </ul>
            </div> 
        )
    }

}

export class AddFriend extends Component {
    state = { newFriend : "Guest" }

    handleOnChange = (event) => { 
        this.setState(  { newFriend :  event.target.value } );
        // console.log("handle on change " + event.target.value); 
     
    }
    
    handleClick = () => { 
            console.log("handle on click"); 
            this.props.addNew(this.state.newFriend); 
    }

    render() {
            return (
                <div>Enter Friend name: 
                     <input type="text" placeholder="Enter friend name" 
                            value= {this.state.newFriend}
                            onChange={this.handleOnChange}
                            >
                            </input>
                     <button onClick={this.handleClick}>Add Friend</button>
                </div>
            )
     }

}

AddFriend.propTypes = {
    addNew : PropTypes.func.isRequired 
}

Friends.propTypes = {
    names : PropTypes.array.isRequired 
}

Friends.defaultProps = {
    names: ["F1", "F2"]
}