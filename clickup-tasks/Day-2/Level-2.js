// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log(typeof('10'));
console.log(typeof(10));
console.log(typeof(Number('10')));
console.log(typeof(parseFloat('9.8')));
console.log("Python".includes('on') && "Jargon".includes("on"));
console.log("I hope this course is not full of jargon.".includes("jargon") ? "Jargons is in" : "not in");
console.log("Generate a random number between 0 and 100 inclusively. " + Math.round(Math.random()*100.) );
console.log("Generate a random number between 50 and 100 inclusively. " + Math.round(Math.random()*50.) );
console.log("Generate a random number between 50 and 100 inclusively. " + Math.round(Math.random()*255 + 1.));
console.log(Math.round(Math.random()*"JavaScript".length));
console.log(`Random character ${"JavaScript"[Math.floor(Math.random()*'JavaScript'.length)]}`);
console.log("1 1 1 1\n12 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 55));
// console.log("You cannot end a sentence with because because because is a conjunction".indexOf("is"));