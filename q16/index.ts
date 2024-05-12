// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestLists: string[] = ["Eisha", "Amna", "Laiba"];
console.log(
  "All Friends!!! \nThere's An Exciting News, I Found A Bigger Dinner Table.\n"
);
// adding more guests
guestLists.unshift("Fatima"); // beginning of array
guestLists.splice(3, 0, "Tayyaba"); // middle of array (due to index start from 0 so the name displayat 4th number)
guestLists.push("Aiman"); // end of array

// Sent invitations
guestLists.forEach((guests) => {
  console.log(
    `Hello! Dear ${guests}, Would You Like To Join Me Today For Dinner?`
  );
});
