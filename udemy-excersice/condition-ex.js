// Exercise: Getting Started with if Statements
// For this exercise, your task is to set the value of the already-defined userCategory variable conditionally. The value for userCategory should depend on the value stored in age:

// If age is smaller than 18, userCategory should be set to 'child'

// For ages between 18 and 65 (18 included, 65 excluded), userCategory should be 'adult'

// For all other ages, userCategory should be 'senior'

// Make sure to put all your conditional code into the pre-defined solve() function - otherwise the automatic solution checking won't work.

const age = 30;

let userCategory; // should be 'child', 'adult' or 'senior'

function solve() {
   if(age < 18){
       userCategory = "child"
   }else if(age < 65){
       userCategory = "adult"
   }else{
       userCategory = "senior"
   }
}

