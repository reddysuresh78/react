import React, { Component } from "react"
import MySign  from './MySignComponent'

class SignUp extends Component {
    state = { appHeading: "My Shopping App"}
    
    render() {
        return <div>
                 <MySign heading="Quick Sign Up!"/>
                
            </div>
    }
}

export default SignUp;
