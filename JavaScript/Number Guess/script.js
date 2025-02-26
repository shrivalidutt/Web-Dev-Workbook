const a = Math.floor(Math.random() * 100) + 1;
let count=0
let b
while(count<100){
  b= (prompt("enter number"))
  b= Number.parseInt(b,10)              //conversion to number
  if(b===a) {alert("correct");  break}
  else if(b<a) {alert("higher!!"); count++}
  else {alert("lower!!"); count++}
}
alert(`score: ${100-count}`);           //use backticks!
