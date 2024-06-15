/**
* Sebastian Perdomo
* June 15, function and object
*/

console.log("Sebastian Perdomo")
function msg(){
    console.log("Hello World")
}

// Function ot print numbers between 1 and 3, inclusive
function printcount() {
    for (let x = 1; x<=3 ; x++){
        console.log(x)
    }
}

// Function that passes a name as argument and print
function greeting(name){
    console.lot(`Welcome to JavaScript ${name}`)
}

//function that passes multiple arguments
function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`)
    // lastname[0] to print the first character of lastname
}

let firstname = "Martha"
let lastname = "Smith"

fullname(firstname, lastname)

// Function without parameters but returns a value

function sumxy(){
    let x =10
    let y = -2
    return x+y
    // any lines after the first return will not be exected
}

// Function with parameters and returns a value
function sum(x,y){
    return x+y
}
// calling sum()
let s = sum(5,10)
console.log(`The sum is ${s}`)

// Function check if a number is positive
function checkpositive(number){
    if(number>0){
        return true
    }
    else{
        return false 
    }
}

// Call the function
let n = 2
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)
 

// Sace function in a variable
/*
function addition(num1, num2){
    return num1+num2    
}
*/

const addition = function(num1, num2){
    return num1+num2
}

/*
// Regular variable function

const product = function(num1, num2){
    return num1+num2
}
*/

//arrow function 
const product = (num1,num2) => {return num1*num2}

// Anonymous Function
(
    function(){
        console.log("This is an anonymous function")
    }
) ();

(
    () =>{console.log("This is an anonymous function using arrow")}

) ();


// Use const when you don't want to change anything later in the function

// BREAK: CLASS RESUME AT 10:55 AM

//OBJECT
/* Real-world objects are all around us, and they each have attributes and behaviors that can describle
- attributes describe the features that an object has.
- behaviors desrcibe actions that an object can perform
*/
// car is the object
let car ={
    // attributes(properties)
    make: "Jeep",
    year: 2021,
    model: "Wrangler",
    starmileage: 10,
    endmileage: 50,


    // behaviors (methods, function)
    accelerate: function(){return this.model},
    brake: function(){return this.make},
    distancetravel: function(){return this.endmileage - this.starmileage}
}

// add a method 'start' to the car object
car.start = function(){
    return `${this.make} ${this.model} is running`
}

//add a property 'price'
car.price = 32000

// LUNCH BREAK: CLASS RESUMES AT 12:30PM