// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Question 41
let magician_name: string[] = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(megician_name: string[]) {
  for (let i = 0; i < megician_name.length; i++) {
    megician_name[i] = megician_name[i] + " The Great.";
  }
}
make_great(magician_name); // modifies the original array
show_magicians(magician_name); // shows modified names
