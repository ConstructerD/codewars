const isGood = str => {
  let st = [...str].sort().join("");
  if (str === st) return true;
  return false;
};
const newI = temp =>
  [...temp]
    .map((x, i, a) => {
      if (i > 0) {
        if (a[i] < a[i - 1]) {
          for (let j = i; j < a.length; j++) a[j] = a[j - 1];
        }
      }
      return a[i];
    })
    .join("");

function findAll(n, k) {
  if (n > k * 9) return [];
  let arr = [];
  let start = "1".repeat(k);
  let finish = "9".repeat(k);
  for (let i = +start; i <= +finish; i++) {
    let temp = i + "";
    //console.log(`i= ${i} temp=${temp} , newi = ${newI(temp)}`);
    let num = [...temp].reduce((a, c) => +a + +c, 0);
    if (num === n /*&& isGood(temp)*/) arr.push(temp);
    //console.log(i,num,temp);
    if (i != +newI(temp)) {
      i = +newI(temp) - 1;
    }
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

console.log(findAll(40,7)); //[247, '1129999', '5566666']
