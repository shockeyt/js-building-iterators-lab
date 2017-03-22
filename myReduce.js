// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(array, callback, initialValue) {

//  CODE INSIDE HERE   //



var acc = initialValue;
var current = array[0];
// IF/ELSE STATEMENT

if (!initialValue){
	acc = array[0];
	current = array[1];
}
// if (initialValue === typeof('string')) {
// 	acc = initialValue;
// }
// else if (initialValue === typeof('number')) {
// 	acc = initialValue;
// }
// else {
// 	acc = array[0];
// }

for (var i = 0; i < array.length; i++) {
	if(i === 0 && !initialValue){
		i++;
	}
  	console.log(i);
  	// callback(acc, array[i], i, array);
  	acc = callback(acc, array[i], i , array);
  	// PREVIOUS WORKING VAR
  	// var current = callback(acc, array[i], i, array);
  	// acc = current;
  }
  return acc;

}

// var sum = [0, 1, 2, 3].reduce(function(acc, val) { return acc + val;
// }, 0);

// console.log(sum);
// let acc = [];
// // var combine = acc + array;
// if (typeof i === undefined) {
// 	return array;
// }
// else {
// 	i = array[i];
// }
// for (let i = 0; i < array.length; i++) {
  	
//   	acc = callback(acc, array[i], i, array);
  	
//   }
//   return acc;


// function (
// 	accumulator,
// 	currentValue,
// 	currentIndex,
// 	array) {
// return accumulator + currentValue
// }


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
