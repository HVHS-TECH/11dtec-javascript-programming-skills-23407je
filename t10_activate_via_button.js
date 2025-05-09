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
  var chance = prompt("red or black. If you would like to use a number like red 1 or black 16 please enter the color and then after a number between 1 and 18 dont forget you can also bet green if you wish but to type a color and then number please type like Red 18. Do not type like red18 you must include the space")
  var pick =("red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","red 1","black 1","red 2","black 2","red 3","black 3","red 4","black 4","red 5","black 5","red 6","black 6","red 7","black 7","red 8","black 8","red 9","black 9","red 10","black 10","red 11","black 11","red 12","black 12","red 13","black 13","red 14","black 14","red 15","black 15","red 16","black 16","red 17","black 17","red 18","black 18","green")
  var roul = Math.random();
  var risknum = roul * 19;
  var roundedrisknum = Math.ceil(risknum);
if (roul >=1 && chance === "black" ) {
  var blacktrue = prompt("black");
  number = number * 1.8;
  console.log(number);
} else if(roul < 1 && chance === "black") {
  var blackfalse = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && chance === "red") {
  var redtrue = prompt("red");
  number = number * 1.8;
  console.log(number);
} else if(roul >= 1 && chance === "red") {
  var redfalse = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 1 && chance === "black 1") {
  var blackfalse1 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 2 && chance === "black 2") {
  var blackfalse2 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 3 && chance === "black 3") {
  var blackfalse3 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 4 && chance === "black 4") {
  var blackfalse4 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 5 && chance === "black 5") {
  var blackfalse5 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 6 && chance === "black 6") {
  var blackfalse6 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 7 && chance === "black 7") {
  var blackfalse7 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 8 && chance === "black 8") {
  var blackfalse8 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 9 && chance === "black 9") {
  var blackfalse9 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 10 && chance === "black 10") {
  var blackfalse10 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 11 && chance === "black 11") {
  var blackfalse11 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 12 && chance === "black 12") {
  var blackfalse12 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 13 && chance === "black 13") {
  var blackfalse13 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 14 && chance === "black 14") {
  var blackfalse14 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 15 && chance === "black 15") {
  var blackfalse15 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 16 && chance === "black 16") {
  var blackfalse16 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 17 && chance === "black 17") {
  var blackfalse17 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 18 && chance === "black 18") {
  var blackfalse18 = prompt("red");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 19 && chance === "green") {
  var greenfalse = prompt("red");
  number = number - number
  console.log(number);
} else if(roul >= 1 && risknum == 1 && chance === "black 1") {
  var chancetrue1 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 2 && chance === "black 2") {
  var chancetrue2 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 3 && chance === "black 3") {
  var chancetrue3 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 4 && chance === "black 4") {
  var chancetrue4 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 5 && chance === "black 5") {
  var chancetrue5 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 6 && chance === "black 6") {
  var chancetrue6 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 7 && chance === "black 7") {
  var chancetrue7 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 8 && chance === "black 8") {
  var chancetrue8 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 9 && chance === "black 9") {
  var chancetrue9 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 10 && chance === "black 10") {
  var chancetrue10 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 11 && chance === "black 11") {
  var chancetrue11 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 12 && chance === "black 12") {
  var chancetrue12 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 13 && chance === "black 13") {
  var chancetrue13 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 14 && chance === "black 14") {
  var chancetrue14 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 15 && chance === "black 15") {
  var chancetrue15 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 16 && chance === "black 16") {
  var chancetrue16 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 17 && chance === "black 17") {
  var chancetrue17 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 18 && chance === "black 18") {
  var chancetrue18 = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 19&& chance === "green") {
  var chancegreen = prompt("red");
  number = number * 4
  console.log(number);
} else if(roul < 1 && risknum == 1 && chance === "red 1") {
  var rfalse1 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 2 && chance === "red 2") {
  var rfalse2 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 3 && chance === "red 3") {
  var rfalse3 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 4 && chance === "red 4") {
  var rfalse4 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 5 && chance === "red 5") {
  var rfalse5 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 6 && chance === "red 6") {
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 7 && chance === "red 7") {
  var rfalse7 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 8 && chance === "red 8") {
  var rfalse8 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 9 && chance === "red 9") {
  var rfalse9 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 10 && chance === "red 10") {
  var rfalse10 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 11 && chance === "red 11") {
  var rfalse11 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 12 && chance === "red 12") {
  var rfalse12 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 13 && chance === "red 13") {
  var rfalse13 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 14 && chance === "red 14") {
  var rfalse14 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 15 && chance === "red 15") {
  var rfalse15 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 16 && chance === "red 16") {
  var rfalse16 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 17 && chance === "red 17") {
  var rfalse17 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 18 && chance === "red 18") {
  var rfalse18 = prompt("black");
  number = number - number
  console.log(number);
} else if(roul < 1 && risknum == 19 && chance === "green") {
  var greenfalse = prompt("black");
  number = number - number
  console.log(number);
} else if(roul >= 1 && risknum == 1 && chance === "red 1") {
  var rchancetrue1 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 2 && chance === "black 2") {
  var rchancetrue2 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 3 && chance === "black 3") {
  var chancetrue3 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 4 && chance === "black 4") {
  var rchancetrue4 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 5 && chance === "black 5") {
  var rchancetrue5 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 6 && chance === "black 6") {
  var rchancetrue6 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 7 && chance === "black 7") {
  var rchancetrue7 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 8 && chance === "black 8") {
  var rchancetrue8 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 9 &&  chance === "black 9") {
  var rchancetrue9 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && risknum == 10 && chance === "black 10") {
  var rchancetrue10 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 11") {
  var rchancetrue11 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 12") {
  var rchancetrue12 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 13") {
  var rchancetrue13 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 14") {
  var rchancetrue14 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 15") {
  var rchancetrue15 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 16") {
  var rchancetrue16 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 17") {
  var rchancetrue17 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "black 18") {
  var rchancetrue18 = prompt("black");
  number = number * 4
  console.log(number);
} else if(roul >= 1 && chance === "green") {
  var chancegreen = prompt("black");
  number = number * 4
  console.log(number);
}
}