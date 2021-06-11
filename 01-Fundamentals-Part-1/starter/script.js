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

/*STRINGS AND TEMPLATE LITERALS
const firstName = "Ana";
const job = "biologist";
const birthYear = 1989;
const year = 2037;

const ana = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
console.log(ana);

const anaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(anaNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple\n\
lines");

console.log(`String with
multiple
lines`);
*/

/*TAKING DECISIONS: IF/ELSE STATEMENTS
const age = 15;
//const isOldEnough = age >= 18;

if(age >= 18) {
    console.log("Sara can start her driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years ;)`);
}

//if(){
//
//} else {
//
//}

const birthYear = 2012;

let century; //we have to define a variable outside the code block (if and else) because variables defined inside the code block will not be accessible outside of the block.
if(birthYear <= 2000) {
    century = 20;
} else{
    century = 21;
}
console.log(century); 
*/

/*TYPE CONVERSION AND COERCION
//conversion = manually (Number, String and Boolean(next lesson))
//coercion = automatically, behind the scenes

// type conversion
const inputYear = "1991";
console.log(inputYear + 18); //199118
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //2009

console.log(Number("Jonas")); //NaN = not a number = invalid number
console.log(typeof NaN); //number

console.log(String(23)); //23 as a string

// type coercion
console.log("I am " + 23 + " years old." );
console.log("I am " + "23" + " years old." );//don't need to do it
console.log("I am " + String(23) + " years old." );//don't need to do it

console.log("23" - "10" - 3); //strings converted into numbers automatically
console.log("23" + "2"); //exception: if we use the plus sign.
console.log("23" * 2);
console.log("23" / 2);
console.log("23" > 2);

let n = "1" + 1; //string 11
n = n - 1; // string will be converted in a umber = 10
console.log(n); //10

n = 2+3+4+"5";
console.log(n); //95

n = "10"-"4"-"3"-2+"5";
console.log(n); //15
*/

/*TRUTHY AND FALSY VALUES
//5 falsy values (not exaclty false but will be false when trying to convert in a boulean): 0, " ", undefinied, null, NaN
//everything else = truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 0;
if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

money = 1000;
if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if(height){
    console.log("Yay! Height is defined");
} else {
    console.log("Height is undefined");
}

height =0;
if(height){
    console.log("Yay! Height is defined");
} else {
    console.log("Height is undefined");
} //again - height is undefined -- not what we want. 0 is also a falsy value
*/

/*EQUALITY OPERATORS: == VS. ===
let age = 18;
if(age === 18) console.log("You just became an adult :D) (strict)");

18 === 18 //true
18 === 19 //false
"18" == 18 // true (type coercion)
"18" === 18 //false

if(age == 18) console.log("You just became an adult :D) (loose)");

age = "18";
if(age === 18) console.log("You just became an adult :D) (strict)");
if(age == 18) console.log("You just became an adult :D) (loose)");
//avoid loose equality as much as you can

let favourite = prompt("What is your favorite number?");
console.log(favourite);
console.log(typeof favourite); //string

if (favourite == 23) { //"23" == 23
    console.log("Cool! 23 is an amazing number!");
}

if (favourite === 23) { //it doesn't work
    console.log("Cool! 23 is an amazing number!");
}

favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite); //number

if (favourite === 23) { //it works!
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log("7 is also a cool number");
} else if(favourite === 9){
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log("Why not 23?");
*/

/*BOOLEAN LOGIC
//AND, OR & NOT OPERATORS
Theory
*/

/*LOGICAL OPERATORS
let hasDriversLicense = true; //A
let hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false


hasDriversLicense = true; //A
 hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){ //OR hasDriversLicense && hasGoodVision
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired); //true
console.log(hasDriversLicense && hasGoodVision && isTired); //false

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...'); //someone else should drive
}
*/

/* THE SWITCH STATEMENT //strick comparison (equality)
const day = "saturday";

switch(day) {
    case "monday": // day === "monday"
        console.log("Plan my course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend =)");
        break;
    default:
        console.log("Not a valid day!");
}

if(day == "monday"){
    console.log("Plan my course structure", "Go to coding meetup");
} else if( day == "tuesday"){
    console.log("Prepare theory videos");
} else if(day == "wednesday" || day == "thursday"){
    console.log("Write code examples");
} else if(day == "friday"){
    console.log("Record videos");
} else if(day == "saturday" || day == "sunday"){
    console.log("Enjoy the weekend =)");
} else {
    console.log("Not a valid day!");
}
*/

//STATEMENTS AND EXPRESSIONS