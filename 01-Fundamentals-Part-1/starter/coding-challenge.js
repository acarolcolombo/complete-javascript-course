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

//////////////////////////////////////////////////////////////////////////////

//Coding Challenge #3

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//Task 1
let dolphinsAverage = (96+108+89)/3; //97.666
let koalasAverage = (88+91+110)/3; //96.333
console.log(dolphinsAverage, koalasAverage);

//OR

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
dolphinsAverage = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3
console.log(dolphinsAverage);

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
koalasAverage = (koalasScore1+koalasScore2+koalasScore3)/3
console.log(koalasAverage);

//Task 2
if(dolphinsAverage > koalasAverage){
    console.log(`Dolphins has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}   else if(dolphinsAverage == koalasAverage){
    console.log(`Draw! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}
    else {
    console.log(`Koalas has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}

//Task 3
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
dolphinsAverage = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3
console.log(dolphinsAverage);

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;
koalasAverage = (koalasScore1+koalasScore2+koalasScore3)/3
console.log(koalasAverage);

if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log(`Dolphins has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}   else if(dolphinsAverage == koalasAverage && dolphinsAverage >=100){
    console.log(`Draw! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}
    else if (dolphinsAverage < koalasAverage && dolphinsAverage >= 100){
    console.log(`Koalas has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
} else{
    console.log(`There is no winner!`);
}

//Task 4
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
dolphinsAverage = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3
console.log(dolphinsAverage);

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;
koalasAverage = (koalasScore1+koalasScore2+koalasScore3)/3
console.log(koalasAverage);

if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log(`Dolphins has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}   else if(dolphinsAverage == koalasAverage && dolphinsAverage >=100){
    console.log(`Draw! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
}
    else if (dolphinsAverage < koalasAverage && dolphinsAverage >= 100){
    console.log(`Koalas has won! Dolphins: ${dolphinsAverage} vs. Koalas: ${koalasAverage}.`);
} else{
    console.log(`There is no winner!`);
}

//////////////////////////////////////////////////////////////////////////////

//Coding Challenge #4

/*Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1.Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
* Data 1: Test for bill values 275, 40 and 430
Hints:
* To calculate 20% of a value, simply multiply it by 20/100 = 0.2
* Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

//Task 1
const finalBill = 430;

let tip = finalBill >= 50 && finalBill <= 300 ? console.log(finalBill*0.15) : console.log(finalBill*0.2);

//Task 2

tip = finalBill >= 50 && finalBill <= 300 ? console.log(`The bill was ${finalBill}, the tip was ${finalBill*0.15}, and the total value ${finalBill + (finalBill*0.15)}`) : console.log(`The bill was ${finalBill}, the tip was ${finalBill*0.20}, and the total value ${finalBill + (finalBill*0.20)}`);

//OR

tip = finalBill >= 50 && finalBill <= 300 ? finalBill*0.15 : finalBill*0.2;
console.log(`The bill was ${finalBill}, the tip was ${tip}, and the total value ${finalBill + tip}`);