/*
Scenario

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.

Input >> Output Examples

rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:

The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:

The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:

The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

function rowWeights(array){
  let team1 = [];
  let team2 = [];
  
  for (let i = 0; i < array.length; i++) {
    team1.length <= team2.length ? team1.push(array[i]) : team2.push(array[i]);
  }
  
  if (team1.length == 0) {
    team1.push(0);
  } 
  if (team2.length == 0) {
    team2.push(0);
  }  
  
  let team1Sum = team1.reduce((accumulator, currValue) => accumulator + currValue);
  let team2Sum = team2.reduce((accumulator, currValue) => accumulator + currValue);
  
  return [team1Sum, team2Sum];
}