// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(array, callback) {

//  CODE INSIDE HERE   //
var acc = "wut";
// var combine = acc + array;

for (let i = 0; i < array.length; i++) {
  	
  	acc = callback(acc, array[i], i, array);
  	
  }
  return acc;

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
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
