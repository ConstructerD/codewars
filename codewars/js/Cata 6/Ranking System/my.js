function rankings(arr){
  
  let res = [];
  let a = [];
  for (i=0; i<arr.length; i++){
    a[i]=arr[i];
  };
  a.sort((a, b) => {
      return b-a;
  });
  
  for (i=0; i<arr.length; i++){
    let pos = a.indexOf(arr[i]);
    res.push(pos+1);
  }

  return res;
}