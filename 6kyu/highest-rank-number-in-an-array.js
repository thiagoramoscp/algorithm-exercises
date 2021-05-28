/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
  
  let maxCountEl = arr[0];
  let obj = new Object();
  
  for (let i=0; i < arr.length ; i++) {
    
    if (!obj.hasOwnProperty(arr[i].toString())) {
      obj[arr[i].toString()] = 1;
    } else {
      obj[arr[i].toString()]++;
    }

    if (obj[arr[i]] > obj[maxCountEl]) {
        maxCountEl = arr[i]; 
        }
  }
  return maxCountEl;
}

//Object.values(obj)[Object.values(obj).length - 1] // valor do último elemento
//Math.max(...Object.values(obj)) // maior valor
//obj[maxCountEl] // valor do atual maximo elemento