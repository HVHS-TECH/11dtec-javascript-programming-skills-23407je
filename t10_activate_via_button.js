/****************************
 
KeyToPage Josh 29/04/25
****************************/


//variables
var number = 0;
var saved = 0;
var random = 0;
var finalpart = 0;

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
    finalpart = number * random;
    console.log(number * finalpart);
    }