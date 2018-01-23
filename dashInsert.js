/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert(454793);
console.log(result) // "4547-9-3"

var result = dashInsert(44);
console.log(result) // "44"

var result = dashInsert(0);
console.log(result) // "0"

var result = isBigger(13);
console.log(result) // "1-3"

**/

function dashInsert(number) {
	// we need to change the perameter to a string
	// change the string into an array using .split()
	var myArray = number.toString().split("");
	// create a variable to store final output
	var output = "";
	// use a for loop to go through the array of numbers and test to see if they are odd
	for (var i = 0; i < myArray.length; i++){ 
		// use a modulus to test to see if the numbers are even or odd
		// number % 2 === 1
		// use the and && operator to test two conditions: 1) if the number is odd, 2) if the number aagter that is odd as well
		if (myArray[i] % 2 === 1 && myArray[i+1] % 2 === 1)
		
		// If both conditions are met, we want to insert the dash 
		output = output + myArray[i] + "-"
	} else {
					// If the conditions are false, we just want to add the number to the final output
			output += myArray[i];
		}
	//now time for your code

	// this is how I started -- var output = ();

	// this was all wrong -- for (number % 2 === 1); {
	}
console.log(output);


var result = dashInsert(454793);
console.log(result)