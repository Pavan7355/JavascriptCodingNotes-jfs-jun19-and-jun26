//Destructing of array or object

//it is a technique in js to unpack properties
//or elements from object or array and assigning 
//variables

//example: object destructing

let person={
    name:"viart",
    age:36,
    city:"bangalore",
    gender:"male"
}
//old approach
//  var name=person.name
//  console.log(name)
//  var age=person.age
//  console.log(age)
//  var city=person.city
//  console.log(city)

//new approach
        // let{name,age,city,gender}=person
        // console.log(age)
        // console.log(gender)

        // Array destructing
        var productDeatils=["I Phone 16 pro","Samsung s24ultra"
            ,"Samsung s24 fe","vivo A24","oppo f9 pro"
        ]
        //old approach
            //   let ele1=productDeatils[0]
            //   console.log(ele1)
            //    let ele2= productDeatils[1]
            //    console.log(ele2)
            //   let ele4= productDeatils[4]
            //   console.log(ele4)

            //new approach
            const[ele1,ele2,ele3,ele4]=productDeatils
            console.log(ele1)
            console.log(ele4)