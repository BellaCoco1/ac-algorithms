//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user


//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 
// input: radious of the circle
// output: te solved calculation, which is the area and perimeter of the circle (with that radious)

//figure out pi
	// area of a circle is PI * (radios * radius)

function circleCalculation (radius) {
	
	var area = Math.PI (radius * radius);
	var perimeter = 2 * Math.PI * radius;
	document.write("The area of the circle is " + Math.round(area) + " and the perimeter of the circle is " + Math.round(perimeter))
}
circleCalculation(10);