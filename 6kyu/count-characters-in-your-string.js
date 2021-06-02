/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/
function count (str) {  
  let occurringCount = {};
  str.split("")
    .map(item => occurringCount.hasOwnProperty(item) ? occurringCount[item] += 1 : occurringCount[item] = 1);
   return occurringCount;
}

//if (occurringCount.hasOwnProperty(item)) {
//      occurringCount[item] += 1
//    } else {
//      occurringCount[item] = 1
//    }