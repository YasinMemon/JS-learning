const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber > 0.7) {
    alert("Your number is greater than 0.7 " + randomNumber)
}

const arr = [12,34,56,77,88]
for(let i=0; i<arr.length;i++){
    alert(arr[i]);
}

for(let i=arr.length-1; i>=0;i--){
    alert(arr[i]);
}

const secondRandomNumber = Math.random()
if(randomNumber >= 0.7 && secondRandomNumber >= 0.7){
    alert("Both are greater than 0.7")
}

if(randomNumber <= 0.2 && secondRandomNumber <= 0.2){
    alert("Both are less than 0.2");
}