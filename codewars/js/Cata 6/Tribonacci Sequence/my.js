function tribonacci(signature,n){
  if (n == 0) return [];
  if (n == 1) return [signature[0]];
  if (n == 2) return [signature[0],signature[1]];
  for (let i=signature.length; i<n; i++){
    signature[i]=signature[i-1]+signature[i-2]+signature[i-3];
  }
  return signature;
}

console.log(tribonacci([1,1,1],10));
//[1,1,1,3,5,9,17,31,57,105]