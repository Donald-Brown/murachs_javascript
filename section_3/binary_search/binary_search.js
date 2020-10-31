let binarySearch = function search(haystack, needle, lo, hi) {
  if (arguments.length === 2) {
    lo = 0;
    hi = haystack.length - 1;
  }
  let middle = Math.ceil((hi + lo) / 2);

  if (hi < lo) {
    return -1;
  }
  if (hi === lo) {
    if (needle === haystack[middle]) {
      return middle;
    } else {
      return -1;
    }
  }
  if (needle === haystack[middle]) {
    return middle;
  } else if (needle < haystack[middle]) {
    return search(haystack, needle, lo, middle - 1);
  } else if (needle > haystack[middle]) {
    return search(haystack, needle, middle + 1, hi);
  }
};

//? Code that uses the binary search
//* function to get random numbers
let getRandomNumber = function (max) {
  let random;
  if (!isNaN(max)) {
    // value >= 0.0 and < 1.0
    random = Math.random();
    // value is an integer between 0 and max - 1
    random = Math.floor(random * max);
    // value is an integer between 1 and max
    random = random + 1;
  }
  // if max is not a number, will be undifined
  return random;
};
//* Create and sort an array of 256 random numbers
let numbers = [];
for (let i = 0; i < 256; i++) {
  numbers[i] = getRandomNumber(1000);
}
numbers.sort(function (a, b) {
  return a - b;
});
//* search for and display the results
let index = binarySearch(numbers, 50);
if (index === -1) {
  console.log("Number not in the array.");
} else {
  console.log(`${numbers[index]} found at position ${index}`);
}
