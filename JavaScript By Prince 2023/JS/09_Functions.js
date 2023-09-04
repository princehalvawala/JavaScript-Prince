// It minimize code and it can be used multiple times by calling it //

function sayName(){
    console.log("Hello");
}
sayName();

//// additions in Functions ////



// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);

// }
// addTwoNumber(2,5);


function addTwoNumber(number1,number2){   
    return number1 + number2;
}
const result =  addTwoNumber(2,5);
console.log("Result is :" , result);


/////***********  Function with  Object and Arrays  **************//////////////

function Calculator(...num1){
    return num1;
}
console.log(Calculator(200,400,600))    // here in console.log it will only show 200 not rest answer like 400,600 so we will use here rest operator (...) //

// Now ans will be : [200,400,600] //


function Calculator1(val1,val2,...number1){
    return number1;
}
console.log(Calculator1(200,400,600))  // OP : val 1 => 200, val 2 => 400 , ...number1 => rest of value so ans is only [600]//






const user = {
    username : "Prince",
    price : 200
}

function handleObject(user){
    console.log(`Username is ${user.username} and price is ${user.price} `);

}

handleObject(user);

