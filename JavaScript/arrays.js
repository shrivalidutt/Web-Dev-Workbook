//arrays are mutable  typeof(arr) = object
let arr = [23, "apple", false, "ram"]
console.log(arr)
console.log("arr[3]: ",arr[3])

console.log("length:", arr.length)               //4

arr[2] = true
console.log(arr) 

//array methods
let num = [1,2,3,4,5]

let b= num.toString()                            // b is now a string
console.log("converted to string:",b)            // 1,2,3,4,5

let c= num.join("_")                             // also a string
console.log("using .join(_)",c)                  // 1_2_3_4_5

// console.log(num.reverse())

let r = num.pop()                 //deletes and gives last element
console.log("using .pop()",num, r)

let p = num.push(5)               //pushes value to end of array
console.log("using .push()",num)

console.log("using .shift()",num.shift(),num)      //removes element from start
console.log("using .unshift()",num.unshift(1),num)   //pushes value to start of array

delete num[0]                     //doesn't affect length of array
console.log("using delete",num) 

num[0]=1
let num2=[6,7,8,9]
console.log("using .concat()",num.concat(num2,10,11,12))   //returns new array, doesn't change existing one

unsorted_arr = [551,22,3,14,5,6,7,8,229]
unsorted_arr.sort()                             //sorts alphabetically    
console.log("using .sort()",unsorted_arr)       // [14, 22, 229, 3, 5, 551, 6, 7, 8]

let compare = (a,b) =>{
  return a-b    //for asc
  // return b-a      (for desc)
}
unsorted_arr.sort(compare)                      //sorts numerically    
console.log("using .sort(compare)",unsorted_arr)

/*splice and slice:
splice adds new items to array 
   num.splice(position to add, No. of elements to remove, elements to add, ... )
this returns deleted items and modifies the array  */

console.log("before splice",num)                  //[1, 2, 3, 4, 5]   
num.splice(1,2,20,6)            
console.log("after splice",num)                  //[1, 20, 6, 4, 5]

console.log("slicing(1,3)",num.slice(1,3))       //[20,6]

//using loops 
console.log("using for loop:")
for(let i=0;i<num.length;i++){
  console.log(num[i])
}

console.log("for each loop:")
num.forEach ((element) => {                     //can't use on html collection
  console.log(element * element )               //used to perform operation on array elements
})                        

//to convert any object to an array use Array.from()
str="minni"
console.log("str:",str)
console.log("Array.fron(str)", Array.from(str))

//for....of
console.log("using for....of")
for (let i of num){
  console.log(i)
}

//for....in
console.log("using for....in")
for (let i in num){
  console.log(num[i])
}

//map, filter, and reduce
console.log("map: ")               //creates a new array and returns it
let a = num.map((value) =>{        //num.map((value,index,array)
  return (value+1)
})
console.log(a)                     //[2,21,7,5,6]

console.log("filter:")
let a2 = num.filter((value)=>{
  return value<10                 //filters array with values that pass a test
})
console.log(a2)                  // [1,6,4,5]

console.log("reduce:")            //reduces an array to a single value
console.log(num)
let a3 = num.reduce((h1,h2)=>{    //h1,h2 takes first 2 values from array
  return h1+h2
})
console.log(a3)                   //36
