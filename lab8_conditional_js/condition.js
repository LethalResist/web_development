console.log("Sebastian Perdomo")
console.log("==== Example 1 ====")
let day = true;

if(day){
    console.log("Good morning")
}

console.log("==== Example 2: if-else statement ====")
let n1 = 8, n2 = 8

if(n1===n2){
    console.log("They are equal")
}
else{
    console.log("They are different")
}

// === checks if the value and the data type is the same, if its ==, it only checks if the value is same

console.log("==== Example 3: mutliway condition if-else statement ====")
// check if a number is postive, negative, or zero
let number = 8
if(number>0){
    console.log(`Number ${number} is positive`)
}
else if(number<0){
    console.log(`Number ${number} is negative`)
}
else if(number===0){
    console.log("The number is zero")
}
else{
    console.log(`${number} is undefined!`)
}

console.log("==== Example 4: mutliway condition statement in prompt function ====")
// check if a user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number: ")

if(n===null){
    console.log("Cancel was pressed")
}
else if(n===""){
    console.log("Ok button was empty")
}
else if(isNaN(n)){
    console.log(`${n} is a string`)
}
else{
    console.log(`${n} is a number`)
}

console.log("==== Example 5: nested conditional statement ====")
// check if a password has at least 6+ characters and no space
let password = prompt("Enter a password")

// to find the number of characters in a string, we use the method .length
if(password.length>=6){
    console.log(`Password ${password} has ${password.length}`)
    if(password.indexOf(" ")=== -1){
        console.log(`Password ${password} DOESN'T HAVE SPACE`)
    }
    else{
        console.log(`Password ${password} HAS SPACE`)
    }
}
else{
    console.log(`Password ${password} has less than 6 characters.`)
}

// BREAK UNTIL 7:20

console.log("==== Excerise ====")

let num = prompt("Enter a value")

if(isNaN(num)){
    console.log(`${num} is a string`)
}
else if(!isNaN(num)){
    console.log(`${num} is a number`)
        if(num>=0){
            console.log(`${num} is a positive number`)
        }
        else{
            console.log(`${num} is a negative number`)
        }
}

//Switch Statement
console.log("==== Example 6: list ====")

let colors = ["yellow","red","olive","orange","babyblue","hotpink"]
// all list has an index number that starts with 0(leftmost)
console.log(`The third color is ${colors[2]}`)

let selectcolor = prompt("Example 6: select a color using an index number")

switch(selectcolor){
    case `0`:
        console.log(`You selected color = ${colors[0]}`)
        break
    case `1`:
        console.log(`You selected color = ${colors[1]}`)
        break
    case `2`:
        console.log(`You selected color = ${colors[2]}`)
        break
    case `3`:
        console.log(`You selected color = ${colors[3]}`)
        break
    case `4`:
        console.log(`You selected color = ${colors[4]}`)
        break
    case `5`:
        console.log(`You selected color = ${colors[5]}`)
        break
    case `5`:
        console.log(`You selected color = ${colors[6]}`)
        break
    default:
        console.log("Color is not in the list!")
}

console.log("==== Example 7: string ====")
let greeting = "Good evening"
console.log(`The seventh character ${greeting[6]}`)