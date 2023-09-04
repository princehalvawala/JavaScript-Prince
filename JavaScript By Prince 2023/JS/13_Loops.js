/// ******** For Loops ***************************///

for (let index = 0; index < 10; index++) {
    const element = index ;
    console.log(element);
    
    
}


for (i=0; i<5; i++) {
    console.log(`Outer Loop Value : ${i}`);
    for (j=0; j<4 ; j++){
        console.log(`Inner Loop value ${i} and inner loop ${i}`);
    }
}

let myArray =  ["flash" , "Batman","Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



/// **********  While Loops *********************** ////////


let index = 0

while(index <= 10){
    console.log(`Value of loop is ${index}`);
    index = index + 2 ;  // OP is 0,2,4,6,8,10 //
}


let marvelArray = ["Thor" , "Ironman" , "Spiderman"]

let arr = 0
while(arr < marvelArray.length){
    console.log(`Values is ${marvelArray[arr]}`);
    arr = arr + 1

}


// Do while () : First Do will execured and while will be checked at last //