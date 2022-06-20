// no semicolon
console.log("Hi")

// works but bad idea
let 
gameScore
= 
289
console.log(gameScore);

// if you write code in this way below:
// return 
// true;

// // javascript assumes that you are writing:
// return; true;

// starting the line of code with ; is called Defensive Approach
let score = 0
; [score, score+3, score+5].forEach(console.log)