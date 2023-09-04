const user = {
    username : "Prince",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,Welcome to Website`);   // this is used here to access global scope //
    }
}

user.welcomeMessage();

user.username = "Sam"  // Now OP will be Sam //
user.welcomeMessage(); 




///// ***********  Arrow Function ************************************///

// 'this' is  not used in Arrow Function //


//      const chai = function(){
//          let username = "ABC";
//          console.log(this.username);             // OP will be undefined //
//      }

//      chai();


const chai = () =>{
    let username = "ABC";
    console.log(username);

}
chai();


// **********  arrow function  **********************//

//      1 st Way 

//      const addTwo = (num1,num2) =>{
//          return num1 + num2
//      }
//      console.log(addTwo(3,4));



// 2nd Way 

const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(5,4));
