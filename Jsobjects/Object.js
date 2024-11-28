//1.object literals

//syntax:
// var
// or
// let object_name={key1:value,key2:value,key3:value}
// or
// const

// let person={
//     name:"viart",
//     age:36,
//     gender:"male",
//     city:"mumbai",
//     ismarried:true
// }
// console.log(person)


//2.object constructor and new keyword

//syntax:

// var 
// or
// let  object_name=new Object()
// or
// const

// let car=new Object()
// car.name="BMW"
// car.model=2024\

// car.color="red"
// console.log(car)

//in one object we can perform 4 operation
//1.read or access the data
//2.insert or write the data
//3.update the data
//4. delete the data

//i have a product and i want to store information of that
//product like product name,price,category,rating,stock


//1.how to access or read specific property from the object?

//syntax:
//           object_name.keyname     or
//          object_name['keyname']


//    console.log(product.pname)
//    console.log(product['rating'])

//2. how modify of update the value of a property from the object?

//syntax:       object_name.keyname=new value


// console.log(product)
// product.pname="samsung s24 ultra"
// product.rating=5
// console.log(product)

//how to insert  or add the property inside the object?
//syntax:

// object_name.keyname=new value   or
// object_name['keyname']=new value

// let product={
//     pname:"I phone 16 pro",
//     price:140000,
//     category:"Electronics",
//     rating:4.5,
//     stock:true
// }
// console.log(product)
// product.color="red"
// product.brand="apple"
// product.storage="256 GB"
// console.log(product)

//4. how to delete property or remove the property from theobject?

//syntax:      delete object_name.keyname


// console.log(person)
// delete person.city
// console.log(person)


//how to add function inside object?


// console.log(person.play())
// person.play()

//how reterive only keynames from the object?

//syntax:     Object.keys(object_name)


// let key=Object.keys(person)
// console.log(key)

//how retrive only the values from the object?

//syntax:   Object.values(object_name)

let person={
    name:"sachin",
    age:36,
    play:function(){
        console.log( this.name+" is playing")
    },
    city:"bangalore"
} 
let value=Object.values(person)
console.log(value)