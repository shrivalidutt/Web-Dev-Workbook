console.log("for loop:")
for(let i=0;i<4;i++){
  console.log(i)
}

const item = {"a":1,
              "b":2,
              "c":3,
              "d":4}
for(let i=0;i<Object.keys(item).length;i++){
  console.log("keys:",Object.keys(item)[i],"val:",Object.values(item)[i])
}
//for in loop- loops through keys of objects
// for of loop- loops through values of objects

console.log("for in:")
console.log("keys")
for (let a in item){
  console.log(a)
}
console.log("values")
for (let a in item){
  console.log(item[a])
}

//of should be followed by an iterable
console.log("for of:")
for(let b of "Mini"){
  console.log(b)
}

console.log("while loop:")
let k=0
while(k!=0){
  console.log(k)
  k--
}

console.log("do while loop:")
let p=1
do{
  console.log(p)
  p--
}while(p!=0)


