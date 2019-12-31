//Pivot Algorithm
let pivot = (arr, start = 0, end = arr.length - 1) => {
  let swap = (array, i, j) => {
    array[i], (array[j] = array[j]), array[i];
  };
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};
//Quicksort Algorithm
let quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivot - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

quickSort([12, 4, 23, 5, 2, 7, 9, 4, 35]);
