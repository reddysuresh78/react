import Point, { Point3D } from './module1'
import React from "react"
import ReactDoM from "react-dom"

let root = document.getElementById("root");

// //Second arg is style
// let element = React.createElement( "u", null, "My First React Example" );
 
// ReactDoM.render(element, root);

// ReactDoM.render(<div><h3>JSX example{"Test"}</h3><h1>{12+3}this is second one</h1></div>, root);
 
// console.log("Index JS file message");

class TestTag extends Component {
    
}
 
let MyTag1 = () => <h2>This is function component </h2>
let MyTag = () => <h1><MyTag1/>This is function component<MyTag1/> </h1>
ReactDoM.render(MyTag(), root);






let p = new Point(1,2);
p.display();

let p3 = new Point3D(1,2,3);
p3.display();
