console.log("hello world")

let a = "hello"
var b = 10
// console.log(a)  //hello
// console.log(b)  // 10
console.log(a+b)  //hello10

// var - globally Scoped 
// let,const - block Scoped

//primitive datatypes- n-number n-null  b-bigInt b-boolean  s-string  s-symbol  u-undefined
let c   //also considered undefined 

//objects in js are similar to dictionary in python
const item = {"a":1,"b":2,"c":3,"d":4}
console.log(item)
console.log(item["b"])      //2
console.log(typeof item)    //object

item["e"]=5
console.log(item)    //{a: 1, b: 2, c: 3, d: 4, e: 5}

//increment and decrement 
a=10
b=4
console.log(++a) //11
console.log(a++) //11
console.log(--a) //11
console.log(a--) //11
console.log(a)   //10
console.log(a--) //10


//difference between == and ===
let comp1 = 6
let comp2 = "6"
console.log(comp1==comp2)    //true
console.log(comp1===comp2)   //false

