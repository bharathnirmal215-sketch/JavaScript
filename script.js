// let item={
//         name:"phone",
//         price:25000,
//         quantity:[1,2,9,8,5],
//         categories:['electronics','phones'],
//             dimensions:{
//             length:7,
//             breadth:3.5,
//             height:.5
//         }

// }
// console.log(item)
// // console.log(item.categories[0])
// // console.log(item.dimensions.length)
// console.log(item.quantity.slice(1,2))



//another way to create object
// let item2= new Object();

// item2.name = 'charger'
// item2.price = 700
// item2.quantity = 1

// console.log(item2)

// //accessing object
// //dot notation
// console.log(item.price)
// item.price=26000
// console.log(item.price)

// //adding new property
// item.returnable=true
// console.log(item)

// //square bracket notation
// console.log(item['price'])
// item['returnable'] = false

// let key ='price'
// item[key]=275000//does not working
// item.key=28000
// console.log(item)


// //adding method
// item ={
//     name:"price",
//     quantity:1,
//     price:25000,
//     buy: function( ){
//         console.log('item added to cart')
//     },
//     addtolist:function(){
//         console.log('item added to list')
//     }
// }
// item.buy()
// item.addtolist()


// arrays
//
 let cities=["chennai","banglore","mumbai"];
 console.log(cities)


 let marks=[73,56,65,76];
 console.log(marks)

// total elements in the array
 console.log(marks.length)

 //only get the first value
 console.log(cities[0])
 console.log(cities[3]) 

 // finding last value of an array
 console.log(marks[marks.length-1])

 //mix of an int and string
 let arr=[5,6,7,'a',"abc",[3,4]]
 console.log(arr)
 console.log(arr[5][0])

 //2nd array two dimensional array
 let matrix=[[2,3,4],[4,6,7],[6,7,8]]
 console.log(matrix[0][2])
 console.log(matrix[2][1])

 //array methods
 let array=['a','b','c','d','e']

 //push - add an element of an end 
 array.push('f')
 console.log(array)

 //pop - removes element from the end and return removed values
 console.log(array.pop())

 //shift - removes element from starting and returns values
 console.log(array.shift())
 console.log(array)