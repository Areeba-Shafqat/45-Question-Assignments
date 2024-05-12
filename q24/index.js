// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("Testing Of Equility And Inequility With Strings:");
let myName = "Areeba";
console.log(myName === "areeba");
console.log(myName === "Areeba");
console.log("Testing Of Lower Case Function:");
console.log(myName.toLowerCase() == "areeba");
console.log("Testing Of Equility And Inequility With Numericals:");
console.log(10 > 4);
console.log(7 < 4);
console.log(4 <= 3);
console.log(7 <= 8);
console.log('Testing With "and" and "or":');
console.log(true && false);
console.log(true || false);
console.log("Testing Wether An Item Is In Array:");
let fruits = ["Cherry", "Banana", "Guava"];
console.log(`Is "Banana" Part Of Array:`);
console.log(fruits.includes("Banana"));
console.log("Testing Wether An Item Is Not In Array:");
console.log(`Is "Apple" Part Of Array:`);
console.log(fruits.includes("Apple"));
export {};
