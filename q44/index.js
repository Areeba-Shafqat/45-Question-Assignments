// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function ingredients(items) {
    console.log("\nMaking A Sandwich With:");
    items.forEach(function (element) {
        console.log("-" + element);
    });
    console.log("Enjoy Your Sandwich.\n");
}
ingredients(["Avocado", "Olives", "Peanut Butter"]);
ingredients(["Chicken", "Cheese", "Mayo"]);
ingredients(["Lettuce", "Ham"]);
