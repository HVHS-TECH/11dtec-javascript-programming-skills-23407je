/****************************
 
KeyToPage Josh 29/04/25
****************************/



//variables
var Username;
var size;
/****************************
 Main code
****************************/
function start() {
    getUsername();
    if (Username == null) {
       return;
    }
}
getsize();
/****************************
  Functions
****************************/
function getUsername() {
    Username = prompt("what is your name?")
}
function getsize() {
size = prompt("What is your height?")
}