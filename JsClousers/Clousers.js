//Clousers in javascript

//it is a technique to access of outer function variable 
//inside inner function

//or

//it is a function to define function inside another
//function

//syntax:

// function outer(){
// // set of code
// function inner(){
//     //set code
// }
// return inner()
// }
// outer()

//a clouser can be defined as js feature in which the
//inner function has access to the outer function variable.
//js every time it will create a clouser in every function

//the colusers has three scope claims they are
//1.access of its own scope
//2.access of variable of the outer function
//3.access of the global variable

var age=36
function Outer(){
var city="bangalore"
console.log(age)
function Inner(){
let name="virat"
console.log(name)
console.log(city)
console.log(age)
}
return Inner
}
let res=Outer()
res()