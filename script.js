let item={
        name:"phone",
        price:25000,
        quantity:[1,2,9,8,5],
        categories:['electronics','phones'],
            dimensions:{
            length:7,
            breadth:3.5,
            height:.5
        }

}
console.log(item)
// console.log(item.categories[0])
// console.log(item.dimensions.length)
console.log(item.quantity.slice(1,2))



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