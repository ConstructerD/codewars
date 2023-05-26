function icombinations(arr, k){
  let res=[];
  for (let i=0; i<arr.length; i++){
   
    
    for (let j=i+1; j<arr.length; j++){
      let a=[];
      a[0]=arr[i];
      a[1]=arr[j];
      a[2]=arr[j+1];
      res.push(a);
    }
  
  }
  return res;
}

console.log(icombinations([1,2,3,4],3));