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
