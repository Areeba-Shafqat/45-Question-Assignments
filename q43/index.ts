// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician_name: string[] = ["Ali", "Zeeshan", "Faisal", "Hasan"];
function make_great(megician_name: string[]) {
  let greatMagicians = [];
  magician_name.forEach((magician) => {
    greatMagicians.push(`${magician}, The Great.`);
  });
  return greatMagicians;
}
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magician_name.slice()); // creates a new modified array
console.log("Original Magicians:");

show_magicians(magician_name); // shows original names

console.log("Great Magicians:");
show_magicians(greatMagicians); // shows modified names
