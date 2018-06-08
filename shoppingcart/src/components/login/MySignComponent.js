import React, { Component } from "react"
 
class MySign  extends Component {
    state = { appHeading: "My Shopping App"}

    sendData = () => {
        console.log("Sending data " + this.refs.userid.value)
        this.props.onSignIn(this.refs.userid.value)
    }

    constructor(){
        super();
        console.log("constructor")
    }

    componentWillMount() {
        
        console.log("componentWillMount " + this.props.heading)
    }

    componentDidMount() {
        document.querySelector("h1").style.color = 'red'
        console.log("componentDidMount")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount ")
    }
    
    render() {
 
        console.log("render")
        return <div>
                <h1>{this.props.heading} </h1>
            
                <form>
                    <input type="text" placeholder="User name" ref="userid"/>
                    <br/>
                    <input type="password" placeholder="Password" ref="pwd" />
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={this.sendData}>
                     {this.props.heading
                    } </button>
                </form>
            </div>
    }
}

export default MySign ;
