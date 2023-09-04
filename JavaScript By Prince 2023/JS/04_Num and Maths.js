const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);  // 3 //
console.log(balance.toFixed(1));   // 100.0 //

//.toPrecision //

const number = 1000000
console.log(number.toLocaleString('en-IN')); // op:10,00,000 //



// =========  Maths ====================== //


console.log(Math.round(4.8));
console.log(Math.ceil(4.3)); // op : 5 //
console.log(Math.floor(4.8)); // op : 4 //
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log("Hello")
console.log(Math.random()); // op between 0 to 1 //
console.log((Math.random()*10) + 1);

