import App from "./components/App"
import ReactDOM from "react-dom"
import React from "react"
import   '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux" 
import appReducers from "./reducers" //For default export, we can provide alias
//Since index.js is the default file, we can ignore index from above. 
let appStore = createStore(appReducers)
 
ReactDOM.render(
<Provider store={appStore}>
    <BrowserRouter basename="/myshop/"> 
        <App/> 
    </BrowserRouter>
 </Provider>
  , document.getElementById("root"))