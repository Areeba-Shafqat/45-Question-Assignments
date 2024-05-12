// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let guests: string[] = ["Ayesha", "Ifra", "Aqsa", "Zainab"];
console.log(guests[4]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
guests[4] = "Lubna"; // Correcting the error by accessing a valid index.
