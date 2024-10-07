let string = "We Love PennApps XXV ";
let curr = 0; 

document.addEventListener("keydown", (event) => {
  console.log("event", event);
  let target = event.target;
  if (event.key !== "Backspace") {
    event.preventDefault();
    let currChar = string[curr];
    target.value += currChar;
    curr++;
    if (curr == string.length) curr = 0;
  }
});
