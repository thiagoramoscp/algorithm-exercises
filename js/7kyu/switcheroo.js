/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){ 
  return x.split("").map(item => item == "a" ? "b" : item == "b" ? "a" : item).join("");
}


// better: const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")