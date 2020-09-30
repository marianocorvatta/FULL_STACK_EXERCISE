// Exercice 2: Maximum Sub Array Sum

const maxSubarraySum = (arr, n) => {
  if (arr.length > 0) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      results.push(arr.slice(i, n + i).reduce((acc, el) => acc + el));
    }
    const maxNumber = results.reduce((acc, el) => (acc > el ? acc : el));
    return maxNumber;
  } else {
    return null;
  }
};

const a = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
// 17

const b = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
// 10

const c = maxSubarraySum([4, 2, 1, 6], 1);
// 6

const d = maxSubarraySum([4, 2, 1, 6, 2], 4);
// 13

const e = maxSubarraySum([], 4);
// null

console.log(a,b,c,d,e);
