//Hoisting
//Hoisting is the default behavior of moving all the
//decalaration at the top of the scope before code execution

//note: js only hoist declaration not intitalization

//js allocates memory for all the variables and functions
//defined in program before execution

// variable hositing
// console.log(a)
// var a=10
// console.log(a)
// console.log(city)
// let city="bangalore"
// console.log(city)

// by seeing above example we conculde that variable 
//hoisting can't be done in js


//function hositing
// fun()
// function fun(){
//     console.log("hello good morning")
// }
// // fun()
// add(10,20)
// function add(x,y){
//    console.log(x+y)
// }
// // add(10,20)

// greet()
// let greet=function(){
//     console.log("i am anonymous")
// }
// greet()
res(10,2)
let res=(a,b)=>{
console.log(a*b)
}
// res(10,2)
// by seeing above examples function declaration are 
// hoisited but function expression are not hoisited