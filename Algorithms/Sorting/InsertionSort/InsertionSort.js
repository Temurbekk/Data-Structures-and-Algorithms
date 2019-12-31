let insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j <= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};
insertionSort([2, 3, 5, 1, 22, 33, 53, 234]);
