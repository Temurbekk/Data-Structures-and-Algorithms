//No Memoization
//Time Complexity is O(2^n)
let naiveFib = n => {
  if (n <= 2) return 1;
  return naiveFib(n - 1) + naiveFib(n - 2);
};

//Memoization
//Time Complexity is O(n)
let memoizedFib = (n, memo = [0, 1, 1]) => {
  if (memo[n]) return memo[n];
  let result = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  memo[n] = result;
  return result;
};

//Tabulation
//Time Complexity is O(n)
let TabulationFib = n => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
