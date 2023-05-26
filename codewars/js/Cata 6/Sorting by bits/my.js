function sortByBit(arr) {
  
  const  countBits = n => n.toString(2).replace(/0/g,'').length;
  let ar = [];
  
  for  (let i=0; i<32; i++) ar.push([]);
  arr.map(x=>{
    ar[countBits(x)].push(x);  
  });
 
  let res = ar.map(x=>{
    if (x.length === 1) {return x}
    else {
      return x.sort((a,b)=>a-b);
    }
  }).reduce((acc,cur) => {
    if (cur.length >0) {
      acc=acc.concat(cur);
      console.log(`acc=${acc} cur=${cur}`);
    }
    return acc;
  },[]) ;
  console.log(`res= ${res}`);
  
  return res;
  
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a)); //[1, 8, 3, 3, 5, 6, 9, 7]