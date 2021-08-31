/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  let arr = [];
  let subArr = [];
  for (let i = n; i > 0; i--) {
  subArr = [];
    for (let j = 1; j <= i; j++) {
      subArr.push(1);
    }
    arr.unshift(subArr);
  }
  return arr;
}