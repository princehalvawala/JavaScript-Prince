
const gameName = new String('prince')

console.log(gameName.charAt(2));           // OP : i //
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4)
console.log(newString);// op : prin //

const secondString = newString.slice(1,3)
console.log(secondString);

// .trim() is used to remove whitespaces between string //