let strng="2000 10003 1234000 44444444 9999 11 11 22 123";
// 11 11 2000 10003 22 123 1234000 44444444 9999

function orderWeight(strng) {
    let s=strng.split(" ");
    console.log(s);
    s.sort(function(a,b){
    	if (sum(a)!=sum(b)) return sum(a) - sum(b);
    	return a.localeCompare(b);
    });
    return s.join(" ");
    
};

let t="103584";
/*
function compareNumbers(a, b) {
  return sum(a) - sum(b);
}
*/
function sum(str) {
  let n=str.split("");
  return n.reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
},0);
};
//alert(sum(t));
//alert(orderWeight(strng));
console.log(orderWeight(strng),"   --> 11 11 2000 10003 22 123 1234000 44444444 9999");