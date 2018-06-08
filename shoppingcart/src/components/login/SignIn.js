import React, { Component } from "react"
import MySign  from './MySignComponent'

class SignIn extends Component {
    state = { appHeading: "My Shopping App",
              loggedUserName: "Guest"}
    
    handleSignIn = (userName) => { this.setState( { loggedUserName : userName } ) }

    render() {
        return <div>
                <h4>Welcome {this.state.loggedUserName} </h4>
                <MySign heading="Sign In" onSignIn={ this.handleSignIn}/>
                 
            </div>
    }
}

export default SignIn;
