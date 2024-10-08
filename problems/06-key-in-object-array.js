/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:


***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  let objCheck = objArray.map(function(obj) {
    return keyString in obj;
  })

  return objCheck.includes(true);

}

/*let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
keyInObjectArray(objArray, 'age'); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
keyInObjectArray(objArray, 'animal'); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;