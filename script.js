const groceryshop = [
    {item:"Apple",price: 25,  category:"fruits"},
    {item:"salt",price: 50, category:"misc"},
    {item:"tomato",price: 120,category:"vegetables"}
];

/*const [{item,price,category}]= groceryshop;
console.log(item);
console.log(price);
console.log(category);*/

groceryshop.forEach(item => {
    console.log(`Item: ${item.item}, Price: ${item.price}`);
});

//spread operator & rest parameter:- syntax:- ...
//! spread operator : converts a string into character array
//?example 1
/*const arr = ["guvi"];
console.log(...arr);
//? Example 2 :-
const arr1 = ["bob","john","doe"]
const arr2 = ["elisa","satya","leo"]
const arr3 = [...arr1, ...arr2]
console.log(arr3);
*/
//! rest parameter:- It is used inside the function to consider the remaining values.
/*function test(a,b,...rest){
    let sum = 0;
    for(let i =0;i<rest.length;i=i+1){
          sum = sum+rest[i];
    }
    return sum;
}
console.log(test(12,13,14,15,16,17))