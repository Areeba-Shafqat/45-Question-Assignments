// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestLists = ["Eisha", "Amna", "Laiba"];
console.log("All Friends!!! \nThere's An Exciting News, I Found A Bigger Dinner Table.\n");
guestLists.unshift("Fatima");
guestLists.splice(3, 0, "Tayyaba");
guestLists.push("Aiman");
// Sent invitations
guestLists.forEach(function (guests) {
    console.log("Hello! Dear ".concat(guests, ", Would You Like To Join Me Today For Dinner?"));
});
