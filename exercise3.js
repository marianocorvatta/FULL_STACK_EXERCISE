// Exercice 3: Average Pair

const averagePair = (arr, a) => {
  let isAverage = false;
  for (let i in arr) {
    arr.map((e) => {
      if ((e + arr[i]) / 2 === a) isAverage = true;
    });
  }
  return isAverage;
};

const a = averagePair([1, 2, 3], 2.5);
// true

const b = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// // true

const c = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
// // false

const d = averagePair([], 4);
// // false

console.log(a, b, c, d);
