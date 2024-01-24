// Exercise #1
// Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
    let matchFound = false;

    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
            console.log("Matched " + dog_names[i]);
            matchFound = true;
        }
    }

    if (!matchFound) {
        console.log("No Matches");
    }
}

// Call method here with parameters
findWords(dog_string, dog_names);


// Exercise #2
// Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index"

// Given arr == ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
          arr.splice(i, 1, "even index");
      }
  }
  return arr;
}

// Test the function
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr));

// Expected output
// Given arr
