// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(array, callback) {

//  CODE INSIDE HERE   //
var new_array = [];

for (var i = 0; i < array.length; i++) {
	
  	
  	new_array.push(callback(array[i], i, array));
  }
  
  return new_array;
  
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
