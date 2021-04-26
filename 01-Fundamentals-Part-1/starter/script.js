/* VALUES AND VARIABLES
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson
let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);


//VARIABLE NAME CONVENTIONS
//let 3years = 3; wrong
//let jonas&matilda = "JM"; wrong
let jonas_matilda = "JM";
//let new = 27; wrong
//let function = 27; wrong
//let name = "Jonas"; wrong
//let Person = "Jonas"; wrong
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";
//let job1 = "programmer"; 
//let job2 = "teacher";
console.log(myFirstJob);
*/


/* DATA TYPES
true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";
console.log( typeof javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
// it is defined as object. It is a bug that was never corrected.
*/


/*LET, CONST AND VAR
let age = 30;
age = 31;
//reassigning/mutating a variable (can declare it empty)

const birthYear = 1991;
//birthYear = 1991; wrong
//cannot be reassiged or mutated (cannot declare it empty)

//best pratice: try to use const, and let when are you sure you will change the data

var job = "programmer";
job = "teacher";
//old way to declare variables (do not use it)

lastName = "Colombo";
console.log(lastName);
//does not create a variable in the scope, instead js will create a property in the global object (do not do this)
*/


/*BASIC OPERATORS
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2017;
console.log(ageJonas, ageSara);

console.log(ageJonas + 2, ageJonas / 10, 2**3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2)

const firstName = "Ana";
const lastName = "Colombo";
console.log(firstName + " " + lastName);

console.log(typeof firstName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 // 25
x *= 4; // x = x * 4 // 100
x ++; // x = x+1 // 101
x --;
x --; //99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2017);
*/

/*OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);
*/

//////////////////////////////////////////////////////////////

//Coding Challenge #1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using the formula (you can even implement both
versions)
3.Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK 😀


//Task 1
const markMass1 = 78;
const markMass2 = 95;
const markHeight1 = 1.69;
const markHeight2 = 1.88;
console.log(markMass1, markMass2, markHeight1, markHeight2);

const johnMass1 = 92;
const johnMass2 = 85;
const johnHeight1 = 1.95;
const johnHeight2 = 1.76;
console.log(johnMass1, johnMass2, johnHeight1, johnHeight2);

//Task 2
const markBMI1 = markMass1 / markHeight1 ** 2;
const markBMI2 = markMass2 / (markHeight2 * markHeight2);
console.log(markBMI1, markBMI2);

const johnBMI1 = johnMass1 / johnHeight1 ** 2;
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
console.log(johnBMI1, johnBMI2);

//Task 3
const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI1, markHigherBMI2);

////////////////////////////////////////////
//Another option:
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// console.log(markMass, markHeight, johnMass, johnHeight);

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
console.log(markMass, markHeight, johnMass, johnHeight);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/