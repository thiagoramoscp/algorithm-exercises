/*
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)

Should yield the same result as

d(c(b(a(input))))
*/

function chained(functions) {
  let resultFunc = function (input) {
    let result = functions[0](input);
    for (let i=1; i<functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  };
  return resultFunc;
}