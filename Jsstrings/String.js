//1.charAt()

//whenever from a string if need to extract a specific 
//character we use charAt()

// var str="hello world"
// console.log(str.charAt(6))
// console.log(str.charAt(8))


//2.toLowerCase()
//all the characters of the string will be convereted 
//to lowercase

// var str="HELLO WORLD"
// console.log(str.toLowerCase())

//3.toUpperCase()
//all the characters of the string will be converted
//into upper case

// var str="hello world"
// console.log(str.toUpperCase())


//4.slice()
//whenever we want to extract a substring from a string
//we can use slice()

//syntax:   slice(startindex)
             //or
             //slice(start index,end index)
// var str="hello world"
// console.log(str.slice(4))
// console.log(str.slice(2,6))

//by slice()  we can give negative index value 
//the extraction will starts from end of an string

// var str1="hello world"
// console.log(str1.slice(-3))


//replace()
//when we want to replace a particular string with new
//string we can use replace()

// let str="hello world"
// console.log(str.replace("hello","hii"))

// let str1="hello world hello"
// console.log(str1.replace("hello","hii"))

//replaceAll()
//to replace all occurances with new string we can't use replace()
//rather we should use replaceAll()

// let str1="hello world hello"
//  console.log(str1.replaceAll("hello","hii"))

//trim()
//inorder to remove the whitespaces from the string we can use trim()
//trim() will remove only whitespaces before and after the string and it won't
//remove whitespaces present between the string
// var str="      hello world       "
// var str1="welcome"
// console.log(str+str1)
// console.log(str.trim()+str1)

//concat()
//it is used to concat two strings

// let str="hello"
// let str1="world"
// console.log(str.concat(str1))


var str="hello world"
console.log(str.substring(4))
console.log(str.substring(-3))
