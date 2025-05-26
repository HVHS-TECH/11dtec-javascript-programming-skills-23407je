/****************************
 
KeyToPage Josh 29/04/25
****************************/



//variables
var Username;
var size;


/****************************
 Main code
****************************/




/****************************
  Functions
****************************/
function start() {
    getUsername();
    if (Username == null) {
       alert("You are disabled");
       return;
    }
}
getUserheight();