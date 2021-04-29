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
*/

//Task 1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
console.log(markMass1, markHeight1, johnMass1, johnHeight1);

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
console.log(markMass2, markHeight2, johnMass2, johnHeight2);

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

/*////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////

//Coding Challenge #2

/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1.Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2.Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
*/

//Task 1
if(markBMI1 > johnBMI1){
    console.log(`Mark's BMI is higher than John's!`);
} else{
    console.log(`John's BMI is higher than Mark's!`);
}

if(markBMI2 > johnBMI2){
    console.log(`Mark's BMI is higher than John's!`);
} else{
    console.log(`John's BMI is higher than Mark's!`);
}

//Task 2
if(markBMI1 > johnBMI1){
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else{
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

if(markBMI2 > johnBMI2){
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else{
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}
