//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//Using .split to get the sentence into an array
//For loop to go through each word 
//Creating a variable to store the longest word
//create a conditional statement to test to see if the new item in the array is longer that the previous one
//Return the number that represents the length of the longest word


//create a variable that will store the output of converting our string to an array 
//string to array
//variable to store longest word length
//for loop
  //conditional statement

//return statement
function findLongestWord(str) {
var stringIntoArray = str.split(" ");
var longestWord = 0;
for (var i = 0; i < stringIntoArray.length; i++){
  if (longestWord < stringIntoArray[i].length){
    longestWord = stringIntoArray[i].length;
  }
} 
return longestWord;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology")