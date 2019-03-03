// // Book page 153 practice writing1 using comparison operators
//
// let pass = 50;
// let score = 90;
//
// // Check if the user has passed
// let hasPassed = score >= pass;
//
// // Write the message into the page
// let el = document.getElementById('answer');
// el.textContent = 'Level passed: ' + hasPassed;




// // Book page 158 practice writing2 using comparison operators
// let score1 = 8;
// let score2 = 8;
// let pass1 = 6;
// let pass2 = 6;
//
// // Check whether user passed both rounds, store result in varialbe
// let passBoth = (score1 >= pass1) && (score2 >= pass2);
//
// // Create message
// let msg = 'Both rounds passed: ' + passBoth;
//
// // Write message into the page
// let el = document.getElementById('answer');
// el.textContent = msg;



// // Exercise 1.0
//
// let i = 0;
//
// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }


// // Exercise 1.1
// let i = 0;
//
// while (i < 11) {
//   console.log(i);
//   i++;
// }


// Exercise 1.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayLength = numbers.length;
let i;

for (i = 0; i <= arrayLength; i++) {
  console.log(i);
}


// // Extended Challenges second exercise:
// // Given any string, use a loop to add padding (extra spaces) to the front to make the string ten
// // characters long. For example, given the string “planet”, log “ planet” (add four spaces), and for
// // the string “headlamp”, log “ headlamp” (add two spaces).
// const random = ["    planet", "  headlamp"];
// let arrayLength = random.length;
// let i;
//
// for (i = 0; i < arrayLength; i++) {
//   console.log(random);
// }
