/*
Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: there will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
*/

function createMessage(firstStr) {
  let strArr = [];
  let funcBolada = function (str) {
    if (str) {
      strArr.push(str);
      return funcBolada;
    } else {
      return strArr.join(" ");
    }
  };
  return funcBolada(firstStr); 
}