
// For of , For Each  type of Loops //

const arr = [1,2,3,4,5]

for (const num of arr) {     // for of loop //
    console.log(num); 
}



const greetings = "Hello" 

for (const greet of greetings) {
    console.log(`${greet}`);  
    
}



//****  Maps  *****//

const map = new Map();
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
// here if we repeat again console log("india") then again it will not consider it , it contains unique ID //
console.log(map);



// == Loops on Map() function ==//

//      for (const key of map) {
//          console.log(key);     // here output will be in array and if we dont want ans in array then use 2 nd below method         

//      }


for (const [key,value] of map) {
    console.log(key , ':-' ,value);            // 2 nd method //  
    
}


//Map() better then for each () //