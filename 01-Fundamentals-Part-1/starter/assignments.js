//VALUES AND VARIABLES
//let country = "Brazil";
//let continent = "South America";
let population = 213;

//console.log(country);
//console.log(continent);
console.log(population);

//DATA TYPES
//let isIsland = false;
let language

//console.log(typeof isIsland);
console.log(typeof population);
//console.log(typeof country);
console.log(typeof language);

//LET, CONST AND VAR
language = "Portuguese";
console.log(language);

const country = "Brazil";
const continent = "South America";
const isIsland = false;
//isIsland = true; wrong
//console.log(isIsland);

//BASIC OPERATORS
//population /= 2;
//population ++;
//console.log(population);

const finlandPopulation = 6;
const averagePopulation = 33;
console.log(population > finlandPopulation);
console.log(population < averagePopulation);

let description = country + " " + "is in " + continent + ", and its " + population + " " + "million people speak " + language;
console.log(description);

//STRINGS AND TEMPLATE LITERALS
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//TAKING DECISIONS: IF/ELSE STATEMENTS
if(population >= averagePopulation){
    console.log(`${country}'s population is above average`);
} else {
    const averageMinusPopulation = averagePopulation - population;
    console.log(`${country}'s population is ${averageMinusPopulation} million below average`);
}

//TYPE CONVERSION AND COERCION
let n = "9"-"5"; //4
console.log(n);
n = "19"-"13"+"17"; //617
console.log(n);
n = "19"-"13"+17; //23
console.log(n);
n="123"< 57; //false
console.log(n);
n=5+6+"4"+9-4-2; //1143
console.log(n);

//EQUALITY OPERATORS: == VS. ===
let numNeighbours = prompt("How many neighbour countries does your country have?");
console.log(numNeighbours);
if(numNeighbours == 1){
    console.log("Only 1 border!");
} else if(numNeighbours > 1){
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

numNeighbours = Number(prompt("How many neighbour countries does your country have?")); //if numNeighbours = 1 --> result = no borders because 1 is a string. I have to convert numNeighbours to a number.
console.log(numNeighbours);
console.log(typeof numNeighbours);
console.log(numNeighbours);
if(numNeighbours === 1){
    console.log("Only 1 border!");
} else if(numNeighbours > 1){
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

//LOGICAL OPERATORS

//const languageSarah = "english";
//const populationSarah < 50;
//const isNotanIslandSarah = true;

if(language == "English" && population < 50 && !isIsland){
    console.log(`You should live in ${country} ;)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

if(language != "English" && population > 50 && !isIsland){
    console.log (`You should live in ${country} ;)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

//SWITCH STATEMENT

//language = "mandarim";

switch(language) {
    case "chinese":
    case "mandarim":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of natve speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too =)");
}

//THE CONDITIONAL (TERNARY) OPERATOR

population >= 33 ? console.log("Brazil's population is above average") : console.log("Brazil's population is below average");

//OR 

populationComparison = population >= 33 ? "Brazil's population is above average" : "Brazil's population is below average";
console.log(populationComparison);