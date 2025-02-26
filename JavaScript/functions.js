function avg(a,b,c){
  result=((a+b+c)/3)
  console.log(result,"or in round fig=",Math.round(result))
}

//arrow func
const sum = (x,y)=>{
  return x+y
}
const hello = () =>{
  console.log("hello world")
}
let a =2
let b =7
let c =4
avg(a,b,c)                      //4.333333333333333 or in round fig= 4
console.log(sum(9,7))           //16
hello()                         //hello world
