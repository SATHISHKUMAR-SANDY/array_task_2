//TASK 1

let fruits = ["APPLE", "BANANA", "ORANGE"];
console.log(fruits.push("MANGO"));
console.log(fruits);

//TASK 2

console.log(fruits.splice(2, 1));
console.log(fruits);

//TASK 3

console.log(fruits.unshift("Pineapple"))
console.log(fruits);

//TASK 4

console.log(fruits.splice(1, 1));
console.log(fruits);

//TASK 5


console.log(fruits.indexOf("BANANA"));

//TASK 6

console.log(fruits.includes("graypes"));

//TASK 7


console.log(fruits.copyWithin())

//TASK 8

let fruits_2 = ["COVA", "KIWI"];
console.log(fruits.concat(fruits_2));

//TASK 9

console.log(fruits.slice(0, 2));
console.log(fruits);

//Task 10 

console.log(fruits.splice(1, 1, "strawbwrry"));
console.log(fruits);

//TASK 11

console.log(fruits.reverse());


//TASK 12

console.log(fruits.sort());

//TASK 13


let fruits_3 = ["strawberry", "banana", "apple"];

let change_upeercase = fruits_3.map(fruits_3 => {
    return fruits_3.toUpperCase()
}
)
console.log(change_upeercase);

//TASK 14
let fruits_4 = ["BANANA","APPLE","KIWI","DRAGON","JERRY"];

let fruits_without_a = fruits_4.filter(fruits_5 => !fruits_5.includes("A"));

console.log(fruits_without_a);


//TASK 15

let fruits_6 = ["BANANA","APPLE","ORANGE","COVA","www"];
fruits_6.forEach((fruit,index)=>{
    console.log(`${index}: ${fruit}`);
}
);


//TASK 16

let fetch_array = fruits_6.every(fruits_6=>fruits_6.length>3);
console.log(fetch_array);
console.log(fruits_6);

//TASK 17

let o_letter_finder= fruits_6.filter(fruits_6=>(fruits_6[0]=="O"));
console.log(o_letter_finder);

//TASK 18

console.log(fruits_6.join());


//TASK 19 

fruits_6.splice(1,1);
console.log(fruits_6);

//TASK 20 

let nestedFruits = ["Apple", ["Banana", "Orange"], "Grapes"];
let flattened = nestedFruits.flat();
console.log(flattened); 















