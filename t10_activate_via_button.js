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
  var choice = prompt("red","black");
  var chance =("non-existant","non-existant2","red","black","red 1","black 1","red 2","black 2","red 3","black 3","red 4","black 4","red 5","black 5","red 6","black 6","red 7","black 7","red 8","black 8","red 9","black 9","red 10","black 10","red 11","black 11","red 12","black 12","red 13","black 13","red 14","black 14","red 15","black 15","red 16","black 16","red 17","black 17","red 18","black 18","green")
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
} else if(roul < 1 && chance === "red 1") {
  var blackfalse1 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 2") {
  var blackfalse2 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 3") {
  var blackfalse3 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 4") {
  var blackfalse4 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 5") {
  var blackfalse5 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 6") {
  var blackfalse6 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 7") {
  var blackfalse7 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 8") {
  var blackfalse8 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 9") {
  var blackfalse9 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 10") {
  var blackfalse10 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 11") {
  var blackfalse11 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 12") {
  var blackfalse12 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 13") {
  var blackfalse13 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 14") {
  var blackfalse14 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 15") {
  var blackfalse15 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 16") {
  var blackfalse16 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 17") {
  var blackfalse17 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red 18") {
  var blackfalse18 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "green") {
  var greenfalse = prompt("red");
  number = number - number
  console.log(number);
} else if(roul >= 1 && chance === "red 1") {
  var chancetrue1 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 2") {
  var chancetrue2 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 3") {
  var chancetrue3 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 4") {
  var chancetrue4 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 5") {
  var chancetrue5 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 6") {
  var chancetrue6 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 7") {
  var chancetrue7 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 8") {
  var chancetrue8 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 9") {
  var chancetrue9 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 10") {
  var chancetrue10 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 11") {
  var chancetrue11 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 12") {
  var chancetrue12 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 13") {
  var chancetrue13 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 14") {
  var chancetrue14 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 15") {
  var chancetrue15 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 16") {
  var chancetrue16 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 17") {
  var chancetrue17 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "red 18") {
  var chancetrue18 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "green") {
  var chancegreen = prompt("red");
  number = number * 4
  console.log(number);
}
}