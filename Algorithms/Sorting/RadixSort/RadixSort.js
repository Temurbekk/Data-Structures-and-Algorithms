//This method returns the position of digits to place in a bucket
let getDigit = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

//This method return the number of time it is required to perform the operation
let digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//This method traverses through an array to find the number with maximum number of digits
let mostDigits = arr => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

//This method performs Radix Sort
let radixSort = arr => {
  let maxDigitCount = mostDigits(arr);
  let length = arr.length;
  for (let k = 0; k < maxDigitCount; k++) {
    //This line creates 10 buckets(10 empty arrays)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    //ES6 spread operator to turn 3 separate arrays into one
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

radixSort([12, 31, 24, 14, 2, 23, 5, 6, 745]);
