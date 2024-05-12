// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    console.log("Makiing T-Shirt ".concat(size, " With A Message \"").concat(text, "\"."));
}
make_shirt(); // default large and message
make_shirt("Medium"); // default message, medium size
make_shirt("Small", "I Love Python."); // custom message, small size
