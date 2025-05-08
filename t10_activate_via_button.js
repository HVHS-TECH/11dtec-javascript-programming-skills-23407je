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
  var classArray = ("0","1");
  var choice = prompt("red or black")
  roul = 2 * Math.random();
if (roul >=1 && choice[1] ) {
  var black = prompt("black");
  number = number * 1.8
  console.log(number);
} else if(roul < 1 && choice[1]) {
  var black = prompt("red");
  number = 0;
  console.log(number);
} else if(roul < 1 && choice[0]) {
  var black = prompt("red");
  number = number * 1.8;
  console.log(number);
} else if(roul >= 1 && choice[0]) {
  var black = prompt("red");
  number = number * 1.8;
  console.log(number);
} 
}