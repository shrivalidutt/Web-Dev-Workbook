//strings are immutable
let a = "shree"

//template literals use backtick ``
let x = "dan"
let y = "guy"
let sentence = `${x} is a friend of ${y}`     //dan is a friend of guy
console.log(sentence) 

//Escape sequence characters
let fruit = 'bana\'na'     
console.log(fruit)                            //bana'na

// \n = newline,  \t = tab,  \r = carriage return

//string manipulations

console.log(a[0])             //s
console.log(a.length)         //5
console.log(a.toUpperCase())  //SHREE
console.log(a.toLowerCase())  //shree

//slicing
console.log(a.slice(2,4))   //re

console.log(a.replace("sh","f"))  //free

// a.concat("one", "two",...) //= shreeonetwo...  can also use + to concatinate
//a.trim() = to remove whitespaces

//includes function
console.log(a.includes("h"))  //true
console.log(a.includes("a"))  //false

//a.startsWith() and a.endsWith()
