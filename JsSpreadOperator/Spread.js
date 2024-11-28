//spread operator

//  ...<object name>
//  or
// ...<array name>

//it is used to copy properties of one object into
//another object and it is used to copy elements of one
//array into another array

//example:  applying spread operator for object
// let obj1={
//     name:"viart",age:36,city:"mumbai"
// }
// console.log(obj1)
// let obj2={
//     ...obj1,id:18,gender:"male",emailId:"viart@gmail.com"
// }
// console.log(obj2)
// let obj3={...obj2}
// console.log(obj3)

//example: applying a spread operator for array
let arr1=[10,20,30,40,50]
console.log(arr1)
let arr2=[...arr1,60,70,80,90]
console.log(arr2)