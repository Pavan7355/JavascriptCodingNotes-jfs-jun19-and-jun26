//1.named function

// function greet(){
//     console.log("hello good moring")
// }
// greet()

// function add(){
//     let num1=90
//     let num2=20
//     console.log(num1+num2)
// }
// add()

//2.parameterized function
//we can send any information to function by passing the inputs/parameters

//syntax:

// function function_name(parameters){
//  // set of code
// }
// function_name(arguments)

// function add(x,y){
//    console.log(x/y)
// }
// add(10,60)
// add(100)
// add(300,"hello")

// function Details(name,age,gender){
// console.log(name)
// console.log(age)
// console.log(gender)
// }
// Details("virat",36,"male")

//parameters:this are the variables without scope statements which is used to store 
//the data and utilized inside function

//arguments: where it will always  accepts the data to store for parameters


//3.return function
//function which can return the results and it should catch by separate variable
//and we can see output
//       parameters--> inputs----->function---->output--->return statement

//syntax:
//    function function_name(){
//     return 

//    }
//return key word is the last excutable statement in function

// function wish(){
//     return "hello how are you"
// }
// let res=wish()
// console.log(res)

// function add(x,y){
//      let res=x+y
//      return res
//      console.log("hello world")
// }
// let result=add(30,90)
// console.log(result)

//4.Anonymous function
//function without name is called anonymous function
//this type is used as callback functions
//syntax:
//      function(){
     //    set of code
//        }

//function expression:  function expression is the process of assigning anonymous
//function to a variable and makeing a call

//    let greet= function(){
//         console.log("i am anonymous function")
//      }
//      greet()

//   let add= function(x,y){
//         console.log(x*y)
//      }
//      add(20,70)

//     let fun=function (){
//         return "i am returned anonymous function"
//      }
//    console.log (fun())


// function print(){
//     console.log("welcome to js class")
// }

// function add(x,y){
//     console.log(x+y)
// }

// function fun(f){
// //    console.log(f)
// f()
// }
// // fun(print())
// // fun(add(10,30))
// fun(function(){
//     console.log("i am anonymous function")
// })

//callback function:any function which are you passing as argument those functions are
//called callback function

//higher order function: any function which is taking another function as a agrument
//that function is called higher order function

//function are called higher order function  only if it takes minimum one function as agrument


//7.Arrow function

//arrow function are introduced es6 version
//function keyword is not used to create arrow function
//arrow are used mainly as callback function

//syntax:
            //  ()=>{
            //     //set of code
            //  }

     //    var print=()=>{
     //            console.log(" i am arrow function")
     //        }
     //        print()

     //  let product=(a,b)=>{
     //             console.log(a*b)
     //        }
     //        product(2,9)

     //       let res= ()=>{
     //            return "hello world"
     //        }
     //     console.log(res())


     //8.immediately invoked function expression(IIFE's)
     //IIFE's function that are defined and executed immediately

     //  (function(){
     //       console.log("hello world")
     //  })  ()
// (function(name,age,gender ){
// console.log(name)
// console.log(age)
// console.log(gender)
//      })
//      ("viart",36,"male")

     //in single js file we have only one IIFE's


     //9.async function
     //async function introduced in es8 version of javascript 
     //it easier to work with promises. they are declared with
     //the async keyword and use the await keyword to pause 
     //execution until promise is resolved

    async function fetchData(){
        let response= await fetch('https://fakestoreapi.com/products/1')
     //  console.log(response)
          let data= await response.json()
          console.log(data)
          console.log(data.title)
          console.log(data.category)
     }
     fetchData()