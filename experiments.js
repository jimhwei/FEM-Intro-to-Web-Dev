const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

// String output
const firstName = "Jim";
const lastName = "W";

const sentence = "Hello" + firstName + " " + lastName + "! How are you?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}`;
console.log(firstName)
console.log(sentenceWithTemplate)
// Template string is kinda like formats in python, insert into string.
// This way you don't have to worry about the spaces. Template strings
// Uses back ticks ONLY, and need to use squirly brackets.

/* Multi line comment style*/

const skyIsBlue = false;
// Case sensitive, true must be in lower case

if (skyIsBlue) {
  console.log("The sky is blue");
} else {
  console.log("The sky is not blue");
}
// Conditions inside the curly brackets

const party = 4;

if (party === 0) {
  console.log("Sad");
} else if (party <= "5") { //This is a string coerced into a number, still works
  console.log("Nice!");
} else {
  console.log("Cool!");
}

// Cannot loop with const
let friendParty = 0;
while (friendParty < 10) {
  friendParty += 1; // Same idea in python
}
console.log(friendParty); // Runs inside the curly bracket

// This is called unary, all do the same thing
// So many ways is due to legacy as JS is derived from C
let friendsAtYourParty = 0;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty += 1;
// friendsAtYourParty++;
// ++friendsAtYourParty;
// console.log(friendsAtYourParty);

// let friendsAtYourParty = 0; Previously declared
// Inside the let is the conditions for your for loop
// i has a mathematics background to it
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);

// Built-in functions
const sentence2 = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence2.toLowerCase());

const person = {
  name: "Jim W",
  city: "Toronto",
  state: "Province",
  favoriteFood: "🌮",
  numberOfTacosWanted: 100,
  getFood() {
    return `${this.favoriteFood}`
  }
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; definitely prefer using the other one
console.log(person.getFood)
