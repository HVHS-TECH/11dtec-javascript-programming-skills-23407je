/****************************
 
KeyToPage Josh 29/04/25
****************************/


//variables
var number = 0;
var random = 0;
var finalpart = 0;
var roul = 0;
/****************************
 Main code
****************************/

/****************************
  Functions
****************************/
function start() {
number = number + 1;
console.log(number);
}
function GAMBLE() {
    random = 2 * Math.random();
    number = number * random;
    console.log(number);
    }
function roulete() {
  var choice = prompt("red","black","red 1","black 1","red 2","black 2","red 3","black 3","red 4","black 4","red 5","black 5","red 6","black 6","red 7","black 7","red 8","black 8","red 9","black 9","red 10","black 10","red 11","black 11","red 12","black 12","red 13","black 13","red 14","black 14","red 15","black 15","red 16","black 16","red 17","black 17","red 18","black 18","green")
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
  var redfalse = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && choice === "red 1") {
  var blackfalse1 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && choice === "red 2") {
  var blackfalse2 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && choice === "red 3") {
  var blackfalse1 = prompt("red");
  number = number - number
  console.log(number);
}
}