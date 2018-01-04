//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//need loop, the loop starts with one and ends at num, we want the loop to increase each time by one (aka 1++)

//need a variable to store the final answer

//need a multiplier to increase the final answer but multiplying the number each time (sum = sum + 1)


function factorializeIt(num) {
  var result = 1;
  for (var i = 1; i <= num; i++){
    result = result * i;
  //console.log(i);
}
return result;
}

factorializeIt(5);
factorializeIt(10);