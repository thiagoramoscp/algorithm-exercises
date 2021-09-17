/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
  let result = str.toLowerCase().split("").filter(item => {
    let regex = new RegExp(item, 'gi');
    return str.toLowerCase().match(regex).length >= 2
  })
  return result.length < 2;
}