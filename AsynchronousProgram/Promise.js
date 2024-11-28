//promise in javascript

//these are the way to handle the asynchrounous operation
//A promise is js object that links producing code 
//and consumeing code that represent a value may be
//avaiable now or in the future

//the promise has three states 
//1.pending
//2.fullfilled
//3.rejected

//                   promises
//                       |
//                       |
//-------------------------------------------------------
//   |                      |                           |
//   fulfilled             pending                     rejected
//   |                                                   | 
//   V                                                   V    
//   resovle()                                           reject()
//    |                                                   | 
//    V                                                   V
//    then()                                              catch()

//creating a promise

//create a promise using promise constructor take a callbackfunction
//with two parameters resolve and reject

//here the promise will be either be resovled or it will be rejected

  let promDemo=new Promise((resolve,reject)=>{
     if(false){
        resolve("promise is fullfilled")
     }
     else{
reject("promise is rejected")
     }
  })

//Handling the promise
//we can use .then() method to handle the promise result if it is
//fullfilled. if error occurs , then we use .catch() method to catch
//the error

promDemo.then((result)=>{
console.log(result)
}).catch((error)=>{
console.log(error)
})

// promDemo.then().catch()