function deleteDigit(n) {
  let arr = n.toString().split("");
  let num = [];
  for (let i=0; i<=arr.length; i++){
    arr = n.toString().split("");
    arr.splice(i,1);
    const str = arr.join("");
    num.push(+str);
  }
  num.sort((a,b)=>b-a);
  return num[0];
}