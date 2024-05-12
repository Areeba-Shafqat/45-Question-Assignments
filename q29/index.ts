// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favorite_fruits: string[] = ["Apples", "Bananas", "Mangos", "Oranges"];
if (favorite_fruits.includes("Bananas")) {
  console.log("I Really Like Bananas.");
}
if (favorite_fruits.includes("Mangos")) {
  console.log("I Really Like Mangos.");
}
if (favorite_fruits.includes("Grapes")) {
  console.log("I Really Like Grapes.");
}
if (favorite_fruits.includes("Apples")) {
  console.log("I Really Like Apples.");
}
if (favorite_fruits.includes("Oranges")) {
  console.log("I Really Like Oranges.");
}
