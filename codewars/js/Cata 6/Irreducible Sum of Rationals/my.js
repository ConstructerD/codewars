function sumFracts(l) {
  const lcm = (arr) =>  { //least common multiple
    let n = arr.length;
    let a = Math.abs(arr[0]);
    for (let i = 1; i < n; i++) {
      let b = Math.abs(arr[ i ]);
      let c = a;
      while (a && b){ a > b ? a %= b : b %= a; }
      a = Math.abs(c*arr[ i ])/(a+b);
    }
    return a;
  };
  const factors = (n) => {
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
    a=a.slice(1);
  return a;
  };

  let denominator = lcm (l.map(x => x[1]));
  let numerator = l.reduce((a,c) => a+c[0]*denominator/c[1],0);
  console.log(denominator, numerator);
  console.log(lcm (l.map(x => x[1])));

  let f1 = factors(numerator);
  let f2 = factors(denominator);
  f1.map(x=>{
    if (f2.includes(x)){
      numerator /= x;
      denominator /=x;
      let pos = f2.indexOf(x);
      f2.splice(pos,1);
    }
  });
  console.log(f1,f2);

  return numerator%denominator ? [numerator, denominator] : numerator / denominator ;
};


//console.log(sumFracts([[1, 2], [1, 3], [1, 4]]));
console.log(sumFracts(([ [ 69, 130 ], [ 87, 1310 ], [ 3, 4 ] ])));



//console.log(lcm ([2,3,4]));
