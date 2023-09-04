
// *******  filter  *************// 

//      const myNums = [1,2,3,4,5,6,7,8] 

//      const numbers = myNums.filter( (num) => num > 4 )
//      console.log(numbers);


            // or : if we use {} then compulsory we have to use 'return' value as shown below //


const myNums = [1,2,3,4,5,6,7,8] 

const numbers = myNums.filter( (num) => {
    return num > 5 
})
 console.log(numbers);




// ---------------  // 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === 'History')

const book2 = books.filter((bk) => { return bk.publish >=  2000})  //  here {} is open so use 'return'  //

console.log(userBooks);
console.log(book2);


//  combination of map() & filter() function  //

const marvel = [1,2,3,4,5]

const dc = marvel.map((num) => num * 10) .map((num) => num + 1) .filter((num) => num > 20) ; 
console.log(dc);



// reduce() :  to reduce array into single value    //


const nums = [1,2,3,4,5]

const myTotal = nums.reduce(function(acc,currval){
    console.log(`acc:${acc} and Currval : ${currval}`);

    return acc + currval
}, 0)
console.log('my total ', myTotal );


// **************** //

const shoppingCart = [
    {
        itemName: "JS Course",
        price : 999
    },
    {
        itemName: "Python Course",
        price : 1999
    },
    {
        itemName: "Mobile Dev Course",
        price : 5999
    },
    {
        itemName: "Data Science Course",
        price : 10999
    },
]
// now to add all total prices of cart so we will use 'reduce()' function //

const toPay = shoppingCart.reduce((acc,item) => {
    
    return acc + item.price

},0)

console.log(`The Total Amount is : ${toPay} Rs.`);
