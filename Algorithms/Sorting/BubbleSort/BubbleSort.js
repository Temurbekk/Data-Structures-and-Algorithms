//Not optimized version of BubbleSort
let bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return array;
};

//Version that fixed comparing with undefined and gets rid of extra comparisons
let bubbleSortES6 = array => {
  //ES6 version of swapping
  const swap = (arr, index1, index2) => {
    arr[index1], (arr[index2] = arr[index2]), arr[index1];
  };
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return array;
};

//Optimized version of BubbleSort
//If the array is sorted, it will stop going through an array
let bubbleSortOptimized = array => {
  let noSwap;
  for (let i = 0; i < array.length; i++) {
    noSwap = true;
    for (let j = 0; j < array.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
};
bubbleSort([23, 21, 53, 67, 12, 3]);
bubbleSortES6([23, 21, 53, 67, 12, 3]);
bubbleSortOptimized([23, 21, 53, 67, 12, 3]);
