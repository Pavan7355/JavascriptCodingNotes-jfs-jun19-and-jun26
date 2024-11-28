//Advance array methods
//1.forEach()
//2.map()
//3.filter()
//4.reduce()
//5.sort()

//forEach()
//if we want to access each and every element of an array
//we are using forEach()
//forEach() will not return any value
//it will not alter original array

// var arr=[10,"sachin",true,15.678,"viart","A"]
//   let newarr=arr.forEach((ele,index)=>{
//     console.log(ele+"  "+index)
//     })
//     newarr


//map()

//map() should be return some value 
//returned value always added in new array
//map() will not alter original array

// let arr=[1,2,3,4,5,6,7,8,9]
//   var newArr=arr.map((ele,index)=>{
//         return ele*10
//   })
//   console.log(newArr)

//filter()
//it is used to filter the elements or data from
//the array based on certain condition
//filter() takes callback function the callbqack 
//will return boolean value 
//it will not alter original array
//it will create the new array

//syntax:
// <arrayname>.filter(()=>{
//       return <boolean value>
//       })

// var arr=[101,300,20,155,600]
// let newArr=arr.filter((ele,index)=>{
//    return ele>200
// })
// console.log(newArr)

//reduce()

//it is used to reduce the array to one single
//value reduce method is such a method which accepts
//a callback function as the parameter (firt param)
//(second param intial value)

// var arr=[10,20,30,40,50,60,70,80,90]
//   let callback=(prev,current)=>{
//       return prev+current
//     }
//    let res=arr.reduce(callback,0)
//    console.log(res)


//sort()
//it is used to sort the array either in asecnding 
//or descending order

// var names=["sachin","Akash","virat","vijay","goutham"]
//    console.log(names.sort())

//asending order
var arr=[10,2,5,17]
   let res=arr.sort((a,b)=>{
      return a-b
   })
   console.log(res)
//desecnding order
   var arr=[10,2,5,17]
   let result=arr.sort((a,b)=>{
      return b-a
   })
   console.log(result)