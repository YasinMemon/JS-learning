// Exercise: for Loops
// For this exercise, you should create a for loop that runs 100 times. In every run, the pre-defined callMe() function should be executed. Therefore, by the end of the loop, callMe() should have been called 100 times.

// Important: Put your loop code into the existing solve() function to ensure that the automatic solution checking works as intended.

function callMe() {
    console.log('Called!');
}

function solve(){
    for(let i=0;i<100;i++){
        callMe()
    }
}

