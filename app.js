// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply(num1, num2) {
  var product = num1 * num2;
  return product;
}


// 2. Write a function called 'addThree' that adds three numbers together and returns the result

function addThree(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers

function smallestNumber(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

// 5. Write a function called 'reverseString' that returns the reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}


// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter

function disemvowel(word) {
  var split = word.split("");
  var makeArray = [];
  for (var i = 0; i < split.length; i++) {
    makeArray.push(split[i]);
  }
  for (var i = 0; i < makeArray.length; i++) {
    if (makeArray[i] == "a" || makeArray[i] == "e" || makeArray[i] == "i" || makeArray[i] == "o" || makeArray[i] == "u") {
      makeArray[i] = "";
      var join = makeArray.join("");
    }
  }
  return join;
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array

function removeOdd(array) {
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      newarray.push(array[i]);
    }
  }
  return newarray;
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array

function removeEven(array) {
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2) !== 0) {
      newarray.push(array[i]);
    }
  }
  return newarray;
}


// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length

function longestString(array) {
  var longest = array[0].length;
  for (var i = 0; i < array.length; i++) {
    if (longest < array[i].length) {
      longest = array[i].length;
      longestStr = array[i];
    }
  }
  return longestStr;
}


// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

function allElementsExceptFirstThree(array) {
  for (var i = 0; i < 3; i++) {
    array.shift();
  }
  return array;
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if ((array.length % 2) == 0) {
      obj[array[i]] = array[++i];
    }
  }
  return obj;
}

var arr = ["ting","tang","tung","tong"];
console.log(convertArrayToAnObject(arr));

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
function fizzBuzz(num) {
  if (((num % 3) == 0) && ((num % 5) == 0)) {
    return "FizzBuzz";
  } else if ((num % 3) == 0) {
    return "Buzz";
  } else if ((num % 5) == 0) {
    return "Fizz";
  }
}

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
