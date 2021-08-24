/*
Write a function nico/nico() that accepts two parameters:

    key/$key - string consists of unique letters and digits
    message/$message - string to encode

and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's encode secretinformation using our crazy key.

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n

After using the key:

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n   

Examples

nico("crazy", "secretinformation") => "cseerntiofarmit on  "
nico("abc", "abcd") => "abcd  "
nico("ba", "1234567890") => "2143658709" 
nico("key", "key") => "eky" 
*/

function nico  (key, message)  {
  let sortedKey = key.split("").sort();
  let keyBasing = [];
  let obj = {};
  let result = [];

  for(let i = 0; i < key.length; i++) {
    keyBasing.push(sortedKey.indexOf(key[i]) + 1);
    obj[keyBasing[i]] = [];
  }
  
  let keyI = 0;
  for (let i = 0; i < message.length || keyI < key.length; i++) {
    if (keyI >= key.length) {
      keyI = 0;
    }
    message[i] ? obj[keyBasing[keyI]].push(message[i]) : obj[keyBasing[keyI]].push(" ");   
    keyI++;
  }

  for (let i = 0; i < obj[1].length; i++) {
    for (const property in obj) {
      result.push(obj[property][i])
    }
  }
  
  return  result.join("");
}