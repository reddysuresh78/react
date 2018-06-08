import React, { Component } from "react"
import Friends, { AddFriend } from "./Example"

class App extends Component {

    state = { cmpHeading: "My React App", 
            friendsData1: ["Illeana","Rakul","Sunny" ]
            }
 
    addNewFriend = (newFriend) => { 
                            console.log("New friend added : " + newFriend )
                            this.setState(  { friendsData1: [...this.state.friendsData1, newFriend]  } )
                    }
    render() {
        return <div>
                <h1>Welcome to React: New Friend : {this.state.cmpHeading}</h1> 
                <Friends   /> 
                {
                    // <Friends names={this.state.friendsData1} /> 
                // <br/>
                // <AddFriend addNew = { this.addNewFriend} />
                }
                <AddFriend  />
            </div>
    }
}

export default App;
