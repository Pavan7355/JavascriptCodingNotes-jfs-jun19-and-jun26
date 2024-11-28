//Math Object
//Math is an inbuilt object in js which can be used to perform
//some specific math opertation

console.log(Math.PI) //print the value of pi
console.log(Math.sqrt(49))//prints the square root of number
console.log(Math.pow(5,2))//prints the pow of the number
console.log(Math.round(4.1))// round to nearest integer
console.log(Math.trunc(45.78906))//it will print
//integer value and removes the decimal value
console.log(Math.sign(-123))//it will check if the 
//given number is positive or negative 
console.log(Math.random())//it is used to generate a random
//number 

//generate a random number b/w 1-6

let random=Math.trunc(Math.random()*6+1)
console.log(random)
//6 is the number of possible results
//1 is the start number
//Math.trunc will remove the decimal value