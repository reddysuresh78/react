

for (let i=1;i<=5;i++){
    console.log(i);
}
// console.log(i);
const c= 23;
// c=334;


f = () => "Wells Fargo";
console.log(f())

x = msg => (msg + "").toUpperCase();

console.log(x("hello"));
console.log(x(true));
 
//Function returns a function
function a() {
    console.log("function a");
    function b() {
        return "Wells fargo";
    }
    return b;
}

let fx = a();
console.log(a()());


function change() {
    let d = document.getElementById("heading");

    let v = d.getAttribute("reply");

    d.innerHTML = v;

}