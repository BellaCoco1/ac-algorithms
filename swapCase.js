/*

Given a string, swap the case of each character and retune it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

//turn our string into an array so we can go through each letter
//A variable to store the output string
//Loop through each letter
	//conditional statement to see if something is uppercase
	//swap cases
	//reconstructing the string by adding the newly swapped letter to my output
//A return that gives us the output

function swapCase(str) {
	// Your code
	//you need a var to store the data type
	var mySwap = str.split("");
	var output = "";

	for (var i = 0; i < mySwap.length; i++){ 
		if (mySwap[i] === mySwap[i].toUpperCase()){
			output += mySwap[i].toLowerCase();
	} else {
		output += mySwap[i].toUpperCase();
		//same as --> output = output + mySwap[i].toUpperCase();

	}
		console.log(output);
}
return output;
}
//var poem = swapCase("To Be or Not To Be");
//console.log(poem)