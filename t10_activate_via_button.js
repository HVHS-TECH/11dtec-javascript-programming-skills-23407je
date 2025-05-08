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
  var classArray = prompt("red","black?");
  var choice = prompt("enter a number from 0 - 1")
  roul = 2 * Math.random();
if (roul >=1 && classArray[1] ) {
  var black = prompt("black");
  number = number * 2
} else {
  var black = prompt("black");
  number = 0;
}
if (roul < 1 && classArray[0]) {
  var red = prompt("red");
  number - number * 1.8
} else {
  var red = prompt("red");
  number = 0;
}
 
  }