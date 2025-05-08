/****************************
 
KeyToPage Josh 29/04/25
****************************/


//variables
var number = 0;
var random = 0;
var finalpart = 0;
var roul = 0;
var roulanswerRed = 0;
var roulanswerblack = 0;

/****************************
 Main code
****************************/




/****************************
  Functions
****************************/
function start() {
number = number + 1;
console.log(number + 1);
}
function GAMBLE() {
    random = 2 * Math.random();
    number = number * random;
    console.log(number);
    }
function roulete() {
  var choice = prompt("red or black")
  var roul = 2 * Math.random();
if (roul >=1 && choice === "black" ) {
  var blacktrue = prompt("black");
  number = number * 1.8;
  console.log(number);
} else if(roul < 1 && choice === "black") {
  var blackfalse = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && choice === "red") {
  var redtrue = prompt("red");
  number = number * 1.8;
  console.log(number);
} else if(roul >= 1 && choice === "red") {
  var redfalse = prompt("red");
  number = number - number
  console.log(number);
} 
}