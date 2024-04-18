// DECLARING VARIABLES (let const var)

// let x = 98;
// x = 50;
// console.log(x);

// const a = 90;
// const A = 90;
// // a = 87; Can not reassign a constant varaiable
// console.log(a);

//rules of namin Vars
// 1. var names must be logical
// const b = 908765432
// const accountNumber = 9087652542
// var can start with letters _ , can not start with numbers, %
// let myName = 'John'
// compound var - camelCasing (pascal casing) my_account_number
// let age = 90;
// let myAccountNumber = 927827267;
// //reserved keywords

// let myTime = "8AM";
// myTime = "9AM";
// console.log(myTime);
// // let let  = 'ade'
// var time = "9AM";
// var time = "10AM";
// console.log(time);
// const countryOfBirth = "Ghana";
// console.log(countryOfBirth);
// let currentLocation = "Ikeja";
// console.log(currentLocation);

// PRIMITIVE - strings, numbers, boolean, null, undefined
// <------- STRINGS --------->
// quotations  ''  " "

const firstName = "Adam";
const lastName = "Sandler";
const middleName = "Owen";
// console.log(typeof firstName, firstName);

// string property length, join and string methods

// console.log(lastName.length);

// string concatenation (join strings + )
// const fullName = firstName + " " + lastName + " " + middleName;
// console.log(fullName);
// console.log(fullName.length);

// // string METHODS- functions that can be performed on strings
// //formatting strings - toLowerCase, toUpperCase, trim trimStart trimEnd

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// const myName = "        wale        ";
// console.log(myName, myName.length);

// const result = myName.trim();
// console.log(result, result.length);

// //searh a string includes, indexOf, lastIndexOf
// const email = "adamowen@google.com";
// console.log(email.includes("@google"));
// // startsWith, endsWith
// console.log(email.startsWith("Adam"));
// console.log(email.endsWith("9"));

// console.log(email.indexOf("o"));
// console.log(email.lastIndexOf("o"));
// //replace and ReplaceAll
// console.log(email.replace("adamowen@google.com", "#"));
// console.log(email.replaceAll("o", "#"));

// // charAt (0)
// console.log(email.charAt("10"));

// console.log(email.concat(" is my email"));
// // console.log('my email is ' + email);
// // You can reah via email @ adamowen@google.com, i am always available

// // extracting portions of a string slice(start, end), substring substr(start, length)
// console.log(email);
// console.log(email.slice(2));
// console.log(email.substring(2));

// console.log(email.substr(0, 5));
// //template literals

// <------ NUMBERS ----->
// const myAge = 65;
// console.log(typeof myAge);
// // math operators + - / *     ** %

// console.log(5 / 5);
// console.log(3 % 2);

// console.log(8.2 % 2);
// console.log(50 % 5);
// console.log(2 % 1);

// console.log(6 ** 2);

// // order of operation
// 7 * 5 + 4 * 2;
// // BEDMAS
// console.log((2 * 4) / 36 - 5 ** 2);

// let likes = 0;

// likes = likes + 1;
// // likes += 1;
// // likes = likes + 1;
// // likes += 1;
// // likes = likes - 1;
// likes++;
// likes--;
// likes++;
// likes++;

// // likes -= 1;

// let savings = 10000;
// savings = savings + 5000;
// savings = savings + 2000;
// savings = savings - 250;
// // savings = savings + 100000
// savings += 100000;
// savings -= 20000;
// savings /= 2

//template literals - allows us to format in variables insde of strings
const country = "Finland";
const population = 30000000;
const language = "Finnish";

// The country finland has a population of 30000000 and the language spoken is finnish

const summary =
  "The Country " +
  country +
  " has a population of " +
  population +
  " the language spoken is " +
  language;
// console.log(summary);

//  n=backticks ` ${nameofVariable} `
const summary2 = `The country ${country} has a population of ${population} and the language spoken is ${language} `;

const author = "Ghost";
const title = "Shadow demon";
const year = 1997;

// The book shadow demon was written by ghost in the yaer 1997
const bookDescription = `The book ${title} was written by ${author} in the year ${year} `;

// <------ BOOLEAN true false ------>
// = ==
// == loose equality operator ()
// === strict eqality operator(care about data types)
// comparison operators < > <= >= ==

// console.log(6 == 5);
// console.log("6" == 6);
// console.log("6" === 6);

// logical operators  and && or ||  not !
// t and f
// console.log(2 == 2 && 5 < 4);
// console.log(0 === "0" && 7 > 6);
// console.log(6 > 4 && 5 < 9);
// console.log(6 < 5 || 4 > 3);

// console.log("A" === "A");
// console.log(5 != 5);

// password is 7  username  is 5 == quam12 f or t
// quam12 1234ab
// password.length <7 && username.length < 5 -- please t

//null and undefined

let customer = null;
// console.log(customer);

// let age;

// console.log(age);

//NaN = not a Number
// console.log(4 / "hello");

const user = "Kelvin001";
const followers = 650;
const following = 200;
const impression = "25M+";

// the user
// const monthlyActivity = `The user ${user} has ${followers} followers and has a monthly impression of ${impression}`;

// control flow -
// console.log("a");
// console.log("b");
// console.log("c");

//conditional statement - if if else else if switch
//IF STATEMENT if(condition){block of code}
// if (false) {
//   console.log("yes it is");
// }

// if (true) {
//   console.log("HERE");
// }

// min password length is 10

// if (password.length < 10) {
//   console.log("Minimum password length is 10");
// }

// if else  if(condition){block of code} else{another block of code}

// if (false) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// const password = "78gkyyt2000";
// 10 , thank for registering

// if (password.length < 10) {
//   console.log("Minimum password length is 10");
// } else {
//   console.log("Thank you for registering");
// }

// const tayosHeight = 56;
// const kelvinHeight = 56;

// write an if else statment to determin who has the highr height
// if tayo is taller than kelvin log Tayo is taller than kelvin to the console and
//otherwise
// if (tayosHeight > kelvinHeight) {
//   console.log("Tayo is taller");
// } else if (kelvinHeight > tayosHeight) {
//   console.log("Kelvin is taller");
// } else {
//   console.log("They are the same height");
// }

// const age = 9;
//  >= 18 adult , you are not  an adult

// if (age < 18) {
//   console.log("You are not an adult");
// } else {
//   console.log("You are an adult");
// }

// if a num is negative or positive
// const num = 8;

// if (num > 0) {
//   console.log(`${num} is a POSTIVE number `);
// } else {
//   console.log(`${num} is a NEGATIVE number`);
// }
//else if
// postive, negative, zero

// if (num > 0) {
//   console.log(`${num} is a POSTIVE number `);
// } else if (num < 0) {
//   console.log(`${num} is a NEGATIVE number `);
// } else {
//   console.log("The Number is ZERO");
// }

// main club 18 - age range is 18 and 60 ,
//children park - age is  less than 18,
//polo club - age is greater than  60,
//Secret club-  age  equal to 100

// const usersAge = -20;
// if (usersAge >= 18 && usersAge <= 60) {
//   console.log("You belong in the main club");
// } else if (usersAge < 18 && usersAge > 0) {
//   console.log("You belong in the childrens park");
// } else if (usersAge == 100) {
//   console.log("You belong to the secret club");
// } else if (usersAge > 60) {
//   console.log("You belong to the Polo club");
// } else {
//   console.log("Invalid age, try again");
// }

// valuation < 3,000, 000, you are not eligble for a loan
// valuation  3,000,000, you are eligible for a loan between 3m - 5m
//  > 6,000, 000, you are eligble for for a loan between 6m - 15m
//  >15,000,000 , you are eligible for any amount betwwen 15m - 30m

//coding challange

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// const avgDolphin = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;
// console.log(avgDolphin, avgKoalas);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// if (avgDolphin > avgKoalas && avgDolphin >= 100) {
//   console.log("Team Dolphin wins 🎉");
// } else if (avgKoalas > avgDolphin && avgKoalas >= 100) {
//   console.log("Team Koala wins 🎉");
// } else if (avgDolphin === avgKoalas && avgDolphin >= 100 && avgKoalas >= 100) {
//   console.log("it is a Tie 😭");
// } else {
//   console.log("No team wins");
// }
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100

// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK

// conditional statement switch , ternary operators

// A - Excellent score, B- Very Good

// const grade = "a";
// switch (grade) {
//   case "A":
//   case "a":
//     console.log("Excellent Score");
//     break;
//   case "B":
//     console.log("Very Good");
//     break;
//   case "C":
//     console.log("Good");
//     break;
//   case "D":
//     console.log("Fair");
//     break;
//   case "E":
//     console.log("Poor");
//     break;
//   case "F":
//     console.log("Fail");
//     break;
//   default:
//     console.log("Not a Valid Grade");
// }

// arts science social science Technology Law

// arts -- the deen is prof Fakunle and his office is at
// arts
// const faculty = "Social Sciences";

// switch (faculty) {
//   case "Arts":
//   case "arts":
//     console.log("Your Deen is Prof. Ngozi and her office is on Floor 3");
//     break;
//   case "Law":
//   case "law":
//     console.log("Your deen is prof Bisi and her office is on floor 2");
//     break;
//   case "Sciences":
//   case "sciences":
//     console.log("Your deen is prof Usman and his office is on floor 2");
//     break;
//   default:
//     console.log("Invalid faculty, try again");
// }

// ternary operator - if else statment

// const yay = 45;
// const nah = 65;

// if (yay > nah) {
//   console.log("The Yah have it");
// } else {
//   console.log("The Nahs have it");
// }

// condition ? first action : second action
// yay > nah ? console.log("The yay have it") : console.log("The nahs have it");

// Pass1234$
// const usersPassword = "Pass1234$";
// const loginPassword = prompt("Enter Your password : ");

// usersPassword === loginPassword ? console.log("Login Successful") : console.log("Invalid credentials, try again");

// password length is greater than 8 -- password is recommeneded
// password is weak, so change it
// hint do not use if else statment
// loginPassword.length > 8
//   ? console.log("Password is recommended")
//   : console.log("The password is weak, chanfe it");

//TYPE CONVERSION AND TYPE COERCION
// const num1 = Number(prompt("enter first number: "));
// const num2 = parseInt(prompt("enter second number: "));
// console.log(num1 + num2);
// '2' + '2' ='22' // 'hello' '67.9' 'why' /  56 NaN
// Strings(valid) ---> numbers
// Number , parseInt, parseFloat, +

// let str1 = "8";
// console.log(typeof str1);
// const converted = Number(str1);
// const converted = parseInt(str1);
// const converted = parseFloat(str1);
// const converted = +str1;

// console.log(typeof converted, converted);

// const alert1 = Number("10000");
// const alert2 = parseInt("56000");
// const alert3 = +"7800";

// console.log(`Your total fee is ${alert1 + alert2 + alert3}`);

// 5000 + 5000 = 50005000
// The total amount of transation
// the total bill is value

// Numbers to strings
// 8 ---> '8'

// const num5 = 90;
// console.log(typeof num5);
// const converted2 = String(num5);
// console.log(typeof converted2);

//COERCION - force
// console.log(5 + "5"); //0
// console.log(9 + "hello" * 98); //

// BOOLEANS - true or false
// TRUTHY AND FALSY VALUES
// NUMBERS 0- falsy value, null, undefined
//Strings -

// console.log(Boolean(""));

// if (null) {
//   console.log("yes");
// }

//JAVASCRIPT MATH OBJECT - SQRT2
// console.log(Math.PI);
// //MATH METHODS - round
// // 4.6 4.3 4.19 4.52
// console.log(Math.round(-2.7));
// // ceil -- rounds up 4.1
// console.log(Math.ceil(4.2));
// // floor - round down
// console.log(Math.floor(8.9));
// //trunc - removes all of the decomal
// console.log(Math.trunc(9.077));

// // pow, sqrt, min, max, random
// console.log(Math.pow(10, 2));
// console.log(Math.sqrt(36));
// console.log(Math.min(65, 9, 0, -8, 98, 76));
// console.log(Math.max(65, 9, 0, -8, 98, 76));

// // math random 0 - 1
// console.log(Math.random());

// // 0 and 10
// console.log(Math.random() * 10);
// console.log(Math.trunc(Math.random() * 11));

// strings, string properties(length, concatenation) Tayo
// string methods(toUppercase, toLowerCase, trim, replace, replaceAll, concat, indexOf, BOLAJI
//lastIndexOf, startsWith, endsWith, includes, charAt, slice, substring, substr) TOBI
//numbers - operators, order of operations (bedmos) Yomi
// template literals = `${nameof Var}` SYLVIA
// booleans true and false comparison and logical operators TONIA
// null, undefined, NaN UCHE
// conditional Statement  if, if else, else if, Samuel
//switch, ternary operators Felix
// type conversion and coercion KELVIN
// truthy and falsy values   PELUMI
// Math object         Christian

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// const bill = 430;
// const tip = bill >= 30 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// const total = bill + tip;

// console.log(
//   `The bill was ${bill}  and the tip was ${tip} and the total value is ${total}`
// );

// <------- FUNCTIONS- block of codes that can be resused ------>
// function functionName (){block of code}
// invoked or called functionName()
const myName = "John Doe";
// function welcomeUser() {
//   console.log("Welcome User");
// }

// welcomeUser();
// welcomeUser();
//

function logYear(year) {
  console.log("The current year is " + year);
}
logYear(1990);
//jane
//paramaters - ensure that functions are resuable

function welcomeUser(name = "user", age = 90) {
  console.log(`welcome ${name} and your age is ${age}`);
}

welcomeUser("ALex", 87);
welcomeUser("Jane", 76);
welcomeUser();
// write a func that logs the description of user in this manner
// my name is name and i currently stay at location
// use two diffrent test cases

// write a func that calculates the age of a user based on their year of birth
// 2024 - year
function calcAge(currentyear, yearofBirth) {
  console.log(`Your current age is ${currentyear - yearofBirth}`);
}

calcAge(2039, 1980);

// number is positive negative or zero

function testNumber(num) {
  if (num > 0) {
    console.log(`${num} is a postive number`);
  } else if (num < 0) {
    console.log(`${num} is a negative number`);
  } else {
    console.log("The number is zero");
  }
}
testNumber(89);
testNumber(-7);
testNumber(0);

// write a function to determine if a number is odd or even  num % 2 === 0
function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
oddOrEven(90);
oddOrEven(25);
oddOrEven(6);

// return keyword in functions --- used to output a value from a func
//anything after a return keyword in a block of code is inaccessible

// squares evry number it has a parameter

function squareNumbers(num) {
  // console.log(num ** 2);
  return num ** 2;
}

// write a func that is called 'describeCountry' that takes in 3 parameters
// 'country', 'population' and "capitalCity". Based on this input, the function
// returns a string with this format : "Nigeria has 6 million people and"
// its capital city is Abuja'
// call this function twice with input data
// store the returned values in variables and log them to the console.

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and the capital city is ${capitalCity}`;
}

const portugal = describeCountry("Portugal", 90, "Lisbon");
const italy = describeCountry("Italy", 45, "Rome");

console.log(portugal);

// Write a function called calcBMI that takes in 2 parameters height, weight. based on this,
//the func returns
// a string with this format : 'The height is h and the weight is w, so the BMI is Bmi'
// call this func twice with differsnt data, then store the returned value in variables
// and log to the console
// bmi = weight / (height ** 2)

const calcBMI = function (height, weight) {
  const bmi = weight / height ** 2;
  return `The height is ${height} and the weight is ${weight}, so the BMI is ${bmi}`;
};

const test1 = calcBMI(1.6, 60);
const test2 = calcBMI(1.8, 72);
console.log(test1, test2);

//FUNCTION EXPRESSIONS

const speak = function (name) {
  console.log("hello " + name);
};

speak();

//hositing - js takes all fun declariotn it takes to the top of page

greeting();
//function delation
function greeting() {
  console.log("I am greeting");
}
//function expression
const greeting2 = function () {
  console.log(" I am also greeting");
};
greeting2();

//arrow functions more modern way
const myLogger = (a, b, c) => {
  const product = a * b * c;
  return product;
};

// const mylogger = (a, b, c) =>  a * b * c;

const squareNumbers2 = (num) => num ** 2;

// write a function that calc average of three numbers (using arrow function)
// teamA = 44 23 71
// teamB =65 54 49

const calcAvg2 = (a, b, c) => (a + b + c) / 3;
const res2 = calcAvg2(44, 23, 71);
console.log(res2);
