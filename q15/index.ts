// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestLists: string[] = ["Eisha", "Amna", "Laiba"];
guestLists.forEach((guests) => {
  console.log(
    `Hello! Dear ${guests}, Would You Like To Join Me Today For Dinner?`
  );
});
let notAttend: string = "Amna";
console.log(
  `\n\n${notAttend} Will Not Be Able To Attend Dinner Due To Some Personal Reasons.\n`
);

// Replace the guest
let newGuest: string = "Fatima";
guestLists[guestLists.indexOf(notAttend)] = newGuest;

// Sent new invitation
guestLists.forEach((guests) => {
  console.log(
    `Hello! Dear ${guests}, Would You Like To Join Me Today For Dinner?`
  );
});
