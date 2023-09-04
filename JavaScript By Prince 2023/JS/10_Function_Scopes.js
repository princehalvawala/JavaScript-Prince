// Local and Global Scopes //

//  {} -  is called Scope //


let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;

}
console.log(a);   // in a its not printing because its inside block and its true 
console.log(b);   // in a its not printing because its inside block and its true 
console.log(c);    // but this is printing outside block or scope also when console is done so Var is not used //



/////    Eg -2  ///////


var d = 500;

if(true){

    d = 30;
}

console.log(d);  // the output will be 30 , so this reason var are not used //


////////////////////////////////////////////////////////////

function one(){
    const username = "Prince"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()


}

one()    // OP : 'Prince' //