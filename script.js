function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// run a function every 1 second

setInterval(() => {


// get all the links on the page
console.log("Hello from script.js");
let linksDoms = document.querySelectorAll("a");

// extract the href attribute from each link
let links = [];
linksDoms.forEach((link) => {
  links.push(link.href);
  console.log("Link: ", link.href);
});

// shuffle the links
let shuffledLinks = shuffle(links);
console.log("Links shuffled");

// set it back to the links
linksDoms.forEach((link, index) => {
  link.href = shuffledLinks[index];
  console.log("Assigned link: ", shuffledLinks[index]);
});

console.log("Links shuffled and assigned");
    
    }
    
