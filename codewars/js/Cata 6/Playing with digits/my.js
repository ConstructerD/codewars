function digPow(n, p){
  // ...
  let arr = n.toString().split('');
  let res = 0;
  for (let i = 0; i < arr.length; i++){
    res+=Math.pow(arr[i],i+p);
  }
  
  console.log(arr,res);
  if (res % n == 0) {
    return res / n;
  } else {
    return -1;
  }
}
console.log(digPow(695,2));