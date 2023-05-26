
function decomp(n) {
  let prime = [];
  let str =``;
  for (let i=2; i<=n; i++){
    prime = prime.concat(decompCurrent(i));
    console.log(i, decompCurrent(i));
  };
  let res = {};
  prime.map((e) => res[e] = 1 + ~~res[e]);
  let s = "";
  for (k in res) {
      if (res[k]>1) {s += k + '^' + res[k] + ' * ';} else {s += k  + ' * ';}
  }
  s = s.substr(0, s.length-3);

  console.log('prime =',prime);
return s;

}


const decompCurrent = (n) => {
  let j = 1;
  let i = 2;
  let a = [];
  if (n==1) return [1];
  if (n==2) return [2];
  do {
    if (n % i == 0){
      a[j] = i;
      j++;
      n = n / i;
    } else  {
    i++;
    }
  }
  while (i < n);
  a[j] = i;
return a.slice(1);
}


console.log(decomp(22));
//"2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19" (22)