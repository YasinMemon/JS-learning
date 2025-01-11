let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveCount = (sentence.match(/love/gi) || []).length;
console.log("number of love word in this sentence : ", loveCount);  

let newSentence = "You cannot end a sentence with because because because is a conjunction"
let becauseCount = (newSentence.match(/because/gi) || []).length
console.log("Number of because in sentence is: ", becauseCount);

let sen = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"

let clearSentence = (sen.replace(/[%$@&;#]/g, ""));

const text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."

const number = text.match(/\d+/g)
console.log(number);

let totalIncome = 0
for(let i=0; i<number.length;i++){
    totalIncome += parseInt(number[i])
}

console.log(totalIncome + parseInt(number[0]) * 12);