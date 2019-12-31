let binarySearch = (arr, target) => {
  let start = 0,
    finish = arr.length - 1;
  middle = Math.floor((start + finish) / 2);
  while (arr[middle] !== target && start <= finish) {
    if (target < middle) finish = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + finish) / 2);
  }
  return arr[middle] === target ? middle : -1;
};
