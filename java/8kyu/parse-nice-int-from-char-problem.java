/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

public class CharProblem {
  public static int howOld(final String herOld) {
    switch (herOld) {
        case "1 year old":
        return 1;
        case "2 years old":
        return 2;
        case "3 years old":
        return 3;
        case "4 years old":
        return 4;
        case "5 years old":
        return 5;
        case "6 years old":
        return 6;
        case "7 years old":
        return 7;
        case "8 years old":
        return 8;
        case "9 years old":
        return 9;
        default:
        return 0;
    }
  }
}

/* return Character.getNumericValue(herOld.charAt(0)); */