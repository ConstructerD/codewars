const factorial = x => {
  let temp = 1;
  for (let i = 1; i <= x; i++) {
    temp *= i;
  };
  return temp;
};

//console.log(factorial(4));

const divideFactorials = (f1,f2) => {
  let temp = 1;
  for (let i = f2+1; i <= f1; i++) {
    temp *= i;
  };
  return temp;
};
//console.log(factorial(6), factorial(4), divideFactorials(6,4));

//const binominal = (n, k) => factorial(n)/(factorial(k)*factorial(n-k));
const binominal = (n, k) => {
  let t = divideFactorials(n, n-k);
  return t/factorial(k);
}

function v1(n, p) {
  return Array(n+1)
    .fill(0)
    .map((x, k, a) => {
      let x1 = (-1) ** k;
      let x2 = 4 ** (n - k);
      let x3 = binominal(2*n - k , k);
      console.log(`k=${k}, n=${n}, p=${p}, x1=${x1}, x2=${x2}, x3=${x3} result: ${x1 * p * x2 * x3}`);
      return x1 * p * x2 * x3;
    })
    .reduce((a, c) => a + c, 0);
};

function u1(n, p) {
  console.log('U',n,p);
  return Array(n+1)
  .fill(0)
  .map((x, k, a) => {
    let x1 = (-1) ** k;
    let x2 = 4 ** (n - k);
    let x3 = binominal(2*n-k+1, k);
    console.log(`U   k=${k}, n=${n}, p=${p}, x1=${x1}, x2=${x2}, x3=${x3} result: ${x1 * p * x2 * x3}`);
    return x1 * p * x2 * x3;
  })
  .reduce((a, c) => a + c, 0);
}
console.log(v1(1, 12));
console.log(u1(1, 14));



//console.log(binominal(14, 2));
//console.log(binominal1(3, 0));

let C = (n, r) => (r === 0 || r === n ? 1 : C(n - 1, r) + C(n - 1, r - 1)),
  u1 = (n, p) =>
    Array(n + 1)
      .fill(0)
      .reduce(
        (s, _, k) =>
          s + Math.pow(-1, k) * p * Math.pow(4, n - k) * C(2 * n - k + 1, k),
        0
      ),
  v1 = (n, p) =>
    Array(n + 1)
      .fill(0)
      .reduce(
        (s, _, k) =>
          s + Math.pow(-1, k) * p * Math.pow(4, n - k) * C(2 * n - k, k),
        0
      );
