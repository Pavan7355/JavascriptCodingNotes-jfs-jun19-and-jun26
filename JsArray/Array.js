//how to create a 2D array?

// let arr2D=["virat",true,[10,30,40],"sachin",false]
// console.log(arr2D)
// console.log(arr2D[3])
// console.log(arr2D[2][1])

// Array methods

//1.push
//whebe ever we need to pusg any data to an array we use push method
//push() always appends data at end of an array

// var arr=[]
// arr.push("virat")
// arr.push(18)
// arr.push(true)
// console.log(arr)

//pop()
//when we need to remove elements from the array we can use pop()
//pop() removes the element which is present at last index of an array

// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr)
// arr.pop()
// arr.pop()
// console.log(arr)

//unshift()

//when we need to push the data in the begining of the array 
//we use the unshift()

// let arr=[10,"sachin",true,27.09]
// console.log(arr)
// arr.unshift("virat")
// arr.unshift(18)
// console.log(arr)

//shift()

//to remove an element from the begining of an array we can use
//shift()
// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr)
// arr.shift()
// arr.shift()
// console.log(arr)

//indexOf()
//this method is used to find the index value of particular element
//if the element is avaiable it will return the index value
//if it is not avaiableit will return -1 value

// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr.indexOf(15.678))
// console.log(arr.indexOf("A"))
// console.log(arr.indexOf("abcd"))


//join()
//whenever we need to join all the elements inside the array
//join() should be used 
//join() will join all the elements of an array and return 
//it in the string format

// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr)
// console.log(arr.join())
// console.log(arr.join(" "))
// console.log(arr.join("$"))


//includes()
//includes() checks weather the data passed to it is present 
//inside the array or not it its present then it returns true
//else it return false

// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr.includes("sachin"))
// console.log(arr.includes(27))


//reverse()

//in order to reverse an array we use reverse()

// var arr=[10,"sachin",true,15.678,"viart","A"]
// console.log(arr)
// console.log(arr.reverse())

//slice()
//when ever we need to extract particular elements from array
//we can use slice()
//it will not alter original array

//syntax:    slice(startindex)  or slice(startindex, endindex) 

// let arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr.slice(3))
// console.log(arr.slice(1,5))
// console.log(arr)


//splice()
//syntax:
//    splice(start index, length)
//extraction starts at the start index extracts the length
//number of elemnents from the array
//in case of splice() it will alter the original array

var arr=[1,2,3,4,5,6,7,8,9]
console.log("original array "+arr)
 var splicedArr=arr.splice(2,4)
 console.log("spliced array "+splicedArr)
 console.log("original array after splice "+arr)