//run this using html as node.js doesn't support prompt

let a = prompt("enter age")  // prompt- asks for input
a = Number.parseInt(a)  //converts string to number
if(a>18){
  alert("Valid age")
}
else{
  alert("Invalid age")
}

//switch statement syntax is same as C language

//condition? exp1:exp2
a=20
console.log("you can",a<18?"not drive":"drive")
