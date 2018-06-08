let myarray = [10,20, 50, 60]

//Add 30 to array

arr2 = [...myarray, 30]

console.log(arr2)

arr3 = [...arr2.slice(0,1), ...arr2.slice(2)]

console.log(arr3)

arr4 = [ ...arr3.slice(0,1), 50, ...arr3.slice( 1     ) ]

console.log(arr4)