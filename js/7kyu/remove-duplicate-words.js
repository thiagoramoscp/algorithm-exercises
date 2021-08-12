/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
  let onlyUnique = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (!onlyUnique.includes(s[i])) {
      onlyUnique.push(s[i]);
    }
  }
  return onlyUnique.join(" ");
}