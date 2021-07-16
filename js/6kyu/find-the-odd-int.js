/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let intFrequency = {};
  for (let i=0; i<A.length; i++) {
    !intFrequency.hasOwnProperty(A[i]) ? intFrequency[A[i]] = 1 : intFrequency[A[i]]++;
  }
  return parseInt(Object.entries(intFrequency).filter(pair => pair[1] % 2 !== 0)[0][0]);
}