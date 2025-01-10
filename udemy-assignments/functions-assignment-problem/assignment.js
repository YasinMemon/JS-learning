const sayHello = (name="Max") => {
  console.log("hi " + name)
}

function finalRes(){
  alert("Your string is empty")
}

const chckInputs = (finalRes, ...args) => {
    console.log(args);
    if(args.some(arg => arg.trim() === "")){
      finalRes()
    }
}

const inp = prompt("Enter string here ");

chckInputs(finalRes, inp);

sayHello();