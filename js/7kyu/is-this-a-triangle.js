/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/
function isTriangle(a,b,c) {
  let sortedArr = [a,b,c].sort((a,b) => a - b);
  return sortedArr[2] < sortedArr[0] + sortedArr[1] ? true : false ;  
}
