
// This will exectude though if one is number and other is string then also it will run //
if (2 == "2"){
    console.log("Executed");
}

// So we use === for checking type, now below output will not be executed  //

if (3 === "3"){
    console.log("Executed");
}else{
    console.log("Not Executed");
}




const score = 200
if(score >  100){
    const power = "fly"
    console.log(`user Power is : ${power}`);
}





const balance = 1000
if(balance < 500){
    console.log("less then 500");
} 
else if(balance < 750){
    console.log("less then 750");
}

else{
    console.log("less then 1500");    
}





const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedFromEmail = true 


if(userLoggedIn && debitCard){     // && - both should be true //
    console.log("Allowed");
}

if(loggedInFromGoogle || loggedFromEmail){
    console.log("Access");               // || - one should be true //
}



const month = 3

switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
        

}

