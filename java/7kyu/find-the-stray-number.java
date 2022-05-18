/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

class Solution {
  static int stray(int[] numbers) {
    int unique = numbers[1];
    
    for (int i = 1; i < numbers.length - 1; i++) {
      if (numbers[i - 1] != numbers[i] && numbers[i] == numbers[i + 1]) {
        unique = numbers[i - 1];
      }
      if (numbers[i - 1] == numbers[i] && numbers[i] != numbers[i + 1]) {
        unique = numbers[i + 1];
      }
    }
    return unique;
  }
}