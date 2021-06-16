/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

int quarter_of(int month) {
    switch (month) {
        case 1:
        return 1;
        case 2:
        return 1;
        case 3:
        return 1;
        case 4:
        return 2;
        case 5:
        return 2;
        case 6:
        return 2;
        case 7:
        return 3;
        case 8:
        return 3;
        case 9:
        return 3;
        case 10:
        return 4;
        case 11:
        return 4;
        case 12:
        return 4;
        default:
        printf("Non valid number inserted");
    }
}