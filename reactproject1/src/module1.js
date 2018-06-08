 
class Point {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display() {
        console.log(this.x + '/' + this.y);
    }
 
}

export default Point;

//Inheritance

export class Point3D extends Point {

    constructor(x,y,z){
        super(x,y);
        this.z =z;
    }

    display() {
        super.display();
        console.log( this.z);
    }
 
}
 