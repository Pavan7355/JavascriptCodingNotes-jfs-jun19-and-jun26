//Fetch:
//fetch is a method which works internally as a promise. fetch
//methos is used to make a network request or to call a appi 
//fetch method will return promise in js

fetch('https://fakestoreapi.com/products/1') //make appi call
.then((res)=>{
 return res.json()
})      //return the fullied promise and convert data into json format
.then((jsondata)=>{
console.log(jsondata)
})  // it will print the output as json
.catch((error)=>{
 console.log(error)
}) //rejected promise