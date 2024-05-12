// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Question 16
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

// Question 17
// message thati invite only two people
console.log(
  "Unfortunately! I Have Space For Only Two Guests.So, I Can Only Invite Two Guests."
);

while (guestLists.length > 2) {
  let deleteGuests = guestLists.pop();
  console.log(`Sorry!\n${deleteGuests}, I Can't Invite You To Dinner.`);
}

guestLists.forEach((guests) => {
  console.log(`Hello! Dear ${guests}, You Are Still Invited Today For Dinner.`);
});

guestLists.splice(0, guestLists.length);
console.log(guestLists); // Remove the last two names
