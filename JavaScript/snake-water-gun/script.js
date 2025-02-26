let options= ["s","w","g"]
let choice
let player

let comp = 0
let you = 0

while(comp<3 && you<3){ 
  choice= options[Math.floor(Math.random()*3)]
  player= prompt("enter choice(s/w/g)")
  alert(`computer's choice: ${choice}`)
  if(choice == player){
    alert("Tie")   
  }
  else if((choice=="s" && player=="g") ||
          (choice=="w" && player=="s") ||
          (choice=="g" && player=="w") ){
      alert("you win")
      you++
  }
  else{
    alert("you lose")
      comp++
  }
}

if (you==3){
  alert("congrats!")
}
else{
  alert("boo!")
}
  
