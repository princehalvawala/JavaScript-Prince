
const myArr = [0,1,2,3,4,5,true,"Prince"]

console.log(myArr[2]);


// Array Methods //

// 1st Push //

myArr.push(6)
console.log(myArr);

//2 nd pop() to remove element //

// 3 rd unshift() //

myArr.unshift(6)
console.log(myArr);


// 4) includes ,indexOf //

console.log(myArr.includes(9)); // op in boolean :- False //
console.log(myArr.indexOf(3)); 


////////////////////////////////////////////////

const newArr = myArr.join()
console.log(myArr);
console.log(newArr); // it joins arrays into string //


// 5)slice , splice //

console.log("slice");
const  myn1 = myArr.slice(1,3) // for 3 its n - 1 index //
console.log(myn1);

const name = ["R", "P" , "S" , "D","A"];
console.log(name.slice(1,3)); // op:- [p,s]
// starts from 1 index and end before n-1 index : eg 2 so it will end at 1 index only:

// splice //
console.log("splice");
const  myn2 = myArr.splice(1,3)
console.log(myn2);

const name2 = ["Raju", "Prince" , "Shivam" , "Fuzeil","Abc"];
console.log(name2.splice(1,3)); // op:- [prince,shivam,fuzeil]
 // it do not cut n-1 index 

// slice -  for cutting some chunks 
// splice - for modifying array


// 6) concat() //

const marvel = ["ironman" , "thor" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]

var allheros = marvel.concat(dc)
console.log(allheros);

// here if we use push() then it will consider dc as whole i object from array and 
//op would be  ["ironman","thor","spiderman",["superman","flash","batman"]]


// 7) spread() : it spreads elemnts of array //

const ultimateheros = [...marvel, ...dc]
console.log(ultimateheros);

// 8) isArray : to ask whether its array ? //

console.log(Array.isArray("prince"))

// 9) from : is used to covert string into arrays //
 
console.log(Array.from("prince"))


