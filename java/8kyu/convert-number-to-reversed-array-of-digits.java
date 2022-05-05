/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/

import java.util.Arrays;

public class Kata {
  public static int[] digitize(long n) {
    String temp = String.valueOf(n);
    int[] arr = new int[temp.length()];
    int counter = 0;
    for (int i = temp.length() - 1; i >= 0; i--) {
      arr[(temp.length() - 1) - i] = Character.getNumericValue(temp.charAt(i));
    }
    return arr;
  }
}

/*
    System.out.println("arr : " + Arrays.toString(arr));
*/