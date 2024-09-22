// let string = "i love pennapps ";
// let curr = 0;
// let boolean = false;

// if any keyboard key is pressed except for the backspace key, simulate a keypress of the current character
// document.addEventListener("keydown", (event) => {
//   if (event.key != "Backspace") {
//     if (boolean == false) {
//       event.preventDefault();
//       console.log("Key pressed: ", event.key, string, curr);
//       let keyEvent = new KeyboardEvent("keypress", {
//         key: string[curr],
//       });
//       console.log("Simulating keypress of: ", string[curr]);
//       boolean = true;
//       document.dispatchEvent(keyEvent);
//       curr++;
//       if (curr == string.length) curr = 0;
//     } else {
//       boolean = false;
//       // dont prevent default
//       event.
//     }
//   }
// });

// let string = "i love pennapps ";
// let curr = 0;
// let boolean = false;

// // if any keyboard key is pressed except for the backspace key, simulate a keypress of the current character
// document.addEventListener("keydown", (event) => {
//   if (event.key != "Backspace") {
//     event.key = string[curr];
//     curr++;
//     if (curr == string.length) curr = 0;
//   }
// });

let string = "We Love PennApps XXV "; // Define your string
let curr = 0; // Initialize the current index

document.addEventListener("keydown", (event) => {
  console.log("event", event);
  let target = event.target;
  if (event.key !== "Backspace") {
    event.preventDefault();
    // append the current character
    let currChar = string[curr];
    // randomly capitalize the character
    target.value += currChar;
    curr++;
    if (curr == string.length) curr = 0;
  }
});
