/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0
*/

public class Kata{
  public static double find_average(int[] array){
    double acc = 0;
    for (int i = 0; i < array.length; i++) {
      acc += array[i];
    }
    return acc / array.length;
  }
}

// return Arrays.stream(array).average().orElse(0);