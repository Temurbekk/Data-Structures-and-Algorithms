let merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  //This loop will run until one of the arrays end
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr2[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  //It will add the rest of array 1 into the merged array 'result' if array 2 has ended
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  //It will add the rest of array 2 into the merged array 'result' if array 1 has ended
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
let mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

merge([1, 2], [3, 4, 5, 6]);
