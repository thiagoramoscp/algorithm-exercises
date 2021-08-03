/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".

The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes

    The order of letters in the result is not important.
    The letters "zz" transform into "a".
    There will only be lowercase letters.
*/

function lastSurvivors(str) {
  let strArr = str.split("");
  
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (i !== j) {
        if (strArr[i] === strArr[j]) {
          if (strArr[i].charCodeAt(0) == 122) {
            strArr[i] = strArr[i].replace(strArr[i], String.fromCharCode(97)); 
          } else {
            strArr[i] = strArr[i].replace(strArr[i], String.fromCharCode(strArr[i].charCodeAt(0) + 1)); 
          }
          strArr.splice(j, 1);
          i = 0;
          break;
        }
      }
    }
  }
  return strArr.join("");
}