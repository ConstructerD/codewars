/*

function triangleWave(length, depth, offset) {
  let arr = [];
  let pos = 0;
  let sign = 1;
  for (let i=0; i<length+offset; i++){
    let st='';
    for (let j=0; j<depth; j++){
      if (j == pos) {st += '*'} else {st += ' '};
    }
    pos += sign;
    if (pos == depth - 1) sign = -1;
    if (pos == 0) sign = 1;
    if (i >= offset) arr.push(st);
  }
  
  let strings=[];
  for (let i=depth-1; i>=0; i--){
    let str = '';
    for (let j=0; j<arr.length; j++){
      str += arr[j][i];
    }
    strings.push(str);
  };
  console.log(arr);
  return strings.join('\n');

  }

  console.log(triangleWave(40,3,10))  ;
  console.log(10%3);
*/

let fibo = [0,1];

const fib = n => {
  let sum = 0;
  for (let i=2; i<=n; i++){
    fibo[i] = fibo[i-2]+fibo[i-1];
  }
return fibo[n];  
}

console.log(fib(5));

let arr=[];
arr[5]=5;
arr[6]=8;
arr[100]=13;

let res = arr.map(x => x*2);
console.log(arr, res);

let n = 1103911;
let indexes = [];

let x = 0;
let n1 = n;
for (let i=0; i<10; i++) 
while (n1 > 10){
  console.log(indexes.length);
  n1%2 ? x=((n1-1)/2)+1 : x=(n1/2)+1;
  console.log(`n=${n1} and divided on ${x} and ${x-1}`);
  indexes.push(x);
  indexes.push(x-1);
  n1 = Math.round(x);

}
/*
Мне нужно сначала найти два множителя для 2n. 
x=((n1-1)/2)+1 для нечётных и x=(n1/2)+1 для чётных.
Затем нужно разложить и эти множители для 2n. Проблема в том, что результат может состоять из 2 и 3 множителей. 
Каждым последующим шагом нужно расскладывать на более мелкие множители.
*/

console.log(indexes);
console.log(n,n1);
