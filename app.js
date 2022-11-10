console.log("CHAPTER 15 (ARRAYS):");
var names = ["a", "b", "c", "d", "e", "f"];

names[3] = "imran";

var b = names;

console.log(b);
console.log(names[3]);
var i = names.indexOf("imran"); /*to check the index value*/
console.log("The index of imran is: " + i);
var l = names.length; /*to check the index quantity*/
console.log("The quantity of index is: " + l);

console.log("");

console.log("CHAPTER 16 (Arrays:pop & push)");
var fruit = ["apple", "banana", "orange", "grapes", "mango", "peach"];
console.log(fruit);

console.log("1) pop methode:");

var fruitEndValueRemove = fruit.pop(); /*removing end value*/
console.log(fruit);

console.log("2) push methode:");

var fruitEndValueAdd    = fruit.push("pineApple"); /*adding end value*/

console.log(fruit);
console.log("replacing value from the main index is:  " + fruitEndValueRemove + " to pineapple");

console.log("");

console.log("CHAPTER 17 (Arrays:shift & unshift)");
var fruit1 = ["apple", "banana", "orange", "grapes", "mango", "peach"];
console.log(fruit1);

console.log("1) shift methode:");
var fruitStartValueRemove = fruit1.shift(); /*removing start value*/
console.log(fruit1);
console.log("first value removed from the main index is:  " + fruitStartValueRemove);

console.log("2) unshift methode:");

var fruitStartValueAdd    = fruit1.unshift("pineApple"); /*adding start value*/

console.log(fruit1);
console.log("adding a value in the main index is:   pineapple");

console.log("3) slice methode:");
var fruit2 = ["apple", "banana", "orange", "grapes", "mango", "peach", "animal", "ahsan", "hen", "camel"];

console.log(fruit2);

var sl = fruit2.slice(9,10)
console.log(sl);

console.log("4) splice methode:");
var fruit3 = ["jacket", "shoes", "socks", "boots", "bag", "bootle", "pen", "spoon", "gloves", "keys"];

console.log(fruit3);

var sp = fruit3.splice(0,3,"bike","purse","upper")
console.log(sp);  

console.log("NOTE:");
console.log("(jacket,shoes,socks has been removed from the main index).");

console.log(fruit3);
console.log("NOTE:");
console.log("(bike,purse,upper has been added in the main index).");

console.log("");

console.log("CHAPTER 18 (for loops)");
for(let a = 0; a <= 5; a++){
        console.log("hey! AHSAN " + a)
}

console.log("");

console.log("ASSIGNMENT OF TABLE: ")
for(let t = 0; t < 10; t++){
    console.log("Table Of (9): " + " 9 X " + (t + 1) + " = " + 9 * (t + 1));
}
