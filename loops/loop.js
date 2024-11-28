//loops
//loops are used to perform repeatative task easily
//instead of manually repeating the tasks we must
//take advantage of loops

//different types loops
//1.for loop
//2.while loop
//3.do while loop
//4.for in loop
//5.for of loop


//for loop

//syntax:
// for(initalize variable;condition;increment/dcrement)
// {
//     //set of code
// }

// for(let i=0;i<10;i++){
//     console.log("number is "+i)
// }

//while loop
//syntax:
//  while(condition){
//     //set of code
//     //increment/decrement
//  }

// var counter=0
// while(counter<10){
//     console.log("counter value is "+counter)
//     counter++
// }

//do while loop

//syntax:
// do{
//     //set code
// }
// while(condition)

// let count=0
// do{
//     console.log("count is "+count)
//     count++
// }
// while(count<10)

//for in loop

//we can iterate throught the object and we can get the access of all
//keys  object properties
//manily this loop will access the key of an object

//syntax:

// for(varibale_name in object_name)

// let person={
//     name:"virat",
//     age:36,
//     city:"mumbai",
//     gender:"male"
// }
// for(var data in person){
//     // console.log(data)   .only key names
//     console.log(person[data]) //only values
// }

//for of loop
//we can iterate throught the array and we can access of all the 
//elements in an array

//syntax:
    // for(variable_name of array_name)

    let arr=[10,20,30,40,50,60,70,80]
    for(var x of arr){
        console.log(x)
    }

    // note : try the example by applying for of loop to object 
    // and for in loop to array  and see the ouput