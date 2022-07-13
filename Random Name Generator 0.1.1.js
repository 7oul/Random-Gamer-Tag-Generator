
// RANDOM NAME GENERATOR
// GAMER NAME

let adj = ["Cool", "Sexy", "Fat", "Dead", "Chonky"];

// ARRAY 2
let adj2 = ["Funky", "Stonk", "Smol", "Big", "Silent"];

let adj3 = ["Smelly", "Fast", "Slow", "Red", "Black"];


// NOUNS 

let noun = ["Man", "Frog", "Rat", "Ninja", "Killer"];

let noun2 = ["Tik Toker", "Officer", "Operator", "Wolf", "Snake"];

let noun3 = ["Monke", "Chonk", "Woman", "Girl", "Plumber"];


// MAKING the random number generator 


let max = 5;
let min = 0;


// VARIABLES FOR Itterating through noun and adj arrays

let x = Math.floor(Math.random() * (max - min)) + min;

let y = Math.floor(Math.random() * (max - min)) + min;


// DECIDING which adj Array 

let max2 = 3;
let min2 = 0;

let whichAdj = Math.floor(Math.random() * (max2 - min2)) + min2;

// Variable ADJ caller which can be either of the 3 arrays

let adjCaller = adj;

// switching between 3 adj arrays at random 

if(whichAdj === 1) {
    firstFunc();
} else {
    secondCheckFunc();
}

function firstFunc() {
    
    adjCaller = adj;
  //  return(adjCaller);
}

function secondCheckFunc() {
    if(whichAdj === 2) {
        adjCaller = adj2;
      //  return(adjCaller);
    } else {
        thirdCheckFunc();
    }
}

function thirdCheckFunc() {
        adjCaller = adj3;
     //   return(adjCaller);
    
}


// DECIDING which noun Array 

let max3 = 3;
let min3 = 0;

let whichNoun = Math.floor(Math.random() *(max3 - min3)) + min3;

// Variable noun caller which can be either of the 3 noun arrays

let nounCaller = noun;

// switching between 3 noun arrays at random 

if(whichNoun === 1) {
    firstNounFunc();
} else {
    secondNounCheckFunc();
}

function firstNounFunc() {
    
    nounCaller = noun;
  //  return(nounCaller);
}

function secondNounCheckFunc() {
    if(whichNoun === 2) {
        nounCaller = noun2;
     //   return(nounCaller);
    } else {
        thirdNounCheckFunc();
    }
}

function thirdNounCheckFunc() {
    nounCaller = noun3;
     //   return(nounCaller);
}

let gamerName = adjCaller[x] + " " + nounCaller[y];

console.log("Your gamer tag is: " +  gamerName);