/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


*/

function duplicateEncode(word){
    // ...
  let wordArr = word.toLowerCase().split("");
  let result = [];
  
  for(let i = 0; i < wordArr.length; i++) {
    for(let j = 0; j < wordArr.length; j++) {
      if (i !== j && wordArr[i] == wordArr[j]) {
        result.push(")");
        j = wordArr.length;
      } else if (j == wordArr.length - 1 && wordArr[i] !== wordArr[j]) {
        result.push("(");
      } else if (i == wordArr.length - 1 && i == j) {
        result.push("(");
      }
    }
  }
  result = result.join("");
  return result;
}

// ( unique
// ) repeated