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
  
  let b = [];
  for (let i=0; i<a.length; i++){
    if (a[i]!=a[i-1]) b.push(a[i]);
  }
return b;
}

function properFractions(n){
  //console.log(n);
  //let sum = 0;
  let f = factors(n);
  let temp = n;
  for (let i=0; i<f.length; i++){
    temp -= temp / f[i] ;
  };
  return temp;
  /*
  for (let i = 1; i < n; i++){
    for (let j = 0; j < f.length; j++){
      if ( (i % f[j]==0) && (n % f[j]==0)   ){
          sum--;
          //console.log(`${i}//${n}`);
          break;
      }
    }
  }
  */
  //console.log(n,sum, 'answer=',n+sum-1);
  //return n+sum-1;
}

let nn =  210;
console.log(properFractions(nn));
console.log(factors(nn))
