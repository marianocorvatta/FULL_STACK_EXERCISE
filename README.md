# FULL_STACK_EXERCISES

## Exercice 1: Highest Occurrence

Write a function called `highestOccurrence`. Given an array of `string` and/or `number`, this function should return the array item with the highest frequency. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type highestOccurrence = (input: Array<string | number>) => Array<string | number>;
```

Example:

```ts
highestOccurrence([2, 3, 2, 2, 2, 4, 2]);
// [2]

highestOccurrence([2, 3, 2, 3, 2, 3, 4]);
// [2, 3]

highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a']);
// ['a']

highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4]);
// ['a', 2]
```

## Exercice 2: Maximum Sub Array Sum

Write a function called `maxSubarraySum` which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type maxSubarraySum = (input: Array<number>, num: number) => number;
```

Example:

```ts
maxSubarraySum([1,2,5,2,8,1,5], 4)
// 17

maxSubarraySum([1,2,5,2,8,1,5], 2)
// 10

maxSubarraySum([4,2,1,6], 1)
// 6

maxSubarraySum([4,2,1,6,2], 4)
// 13

maxSubarraySum([], 4)
// null
```

## Exercice 3: Average Pair

Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type averagePair = (input: Array<number>, target: number) => boolean;
```

Example:

```ts
averagePair([1,2,3], 2.5)
// true

averagePair([1,3,3,5,6,7,10,12,19], 8)
// true

averagePair([-1,0,3,4,5,6], 4.1)
// false

averagePair([], 4)
// false
```
