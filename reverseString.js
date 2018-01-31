//write a function that takes in a string and returns that string but with all the characters in reverse order

// example Hello -> olleh

// suedo code first
// name what tools
// only allowed to use .split as the only method

//input is a string with one perameter
//need a variable to store the output string
//need a variable to store the array that we create when we SPLIT the string into individual letters
//use a for loop to run through each letter and to then concatenate it into the output string


function myReverseString(str){
var newString = "";
var newStingArray = str.split("");

for (var i = newStingArray.length - 1; i >= 0; i--){
    newString = newString + newStingArray[i];
    }

    return newString;
}

var result = myReverseString("cannons");
console.log(result);