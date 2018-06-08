import React, { Component } from "react"
 
import SignIn from './login/SignIn'
import SignUp from './login/SignUp'
import ManageProducts from './shopping/ManageProducts'
import {Route, Link, Switch} from 'react-router-dom'
import {NotFound} from './routecomponents' 
import {Home} from './Home' 
class App extends Component {
    state = { appHeading: "My Shopping App"}
    
    render() {
        return <div>
   
               <nav className="navbar navbar-inverse">
                    <Link to="/"  className="navbar-brand">{this.state.appHeading} </Link> 
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signIn">Sign In</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                        <li><Link to="/manageProducts">Manage Products</Link></li>
                    </ul>

               </nav>
                <Switch>
                {
                //<Route path="/" exact render = { () => <h1>Welcome Home </h1> } />
                }
                <Route path="/" exact  component = {Home} />
                <Route path="/signin" component = {SignIn} />
                <Route path="/signup" component = {SignUp} />
                <Route path="/manageProducts" component = {ManageProducts} />
                <Route path="*" component = {NotFound} />
                </Switch>
             </div>
    }
}

export default App;
