function rank(st, we, n) {
  if (typeof st === null || !st.length) return  "No participants";
  if ((st.match(/[,]/g).length +1) < n) return "Not enough participants";
  let arr = st.split(',').map((x,i)=>{
    //let name = x.split('');
    return [x, ([...x].map(x=>x.toUpperCase().charCodeAt()-64).reduce((a,c)=>a+c,0) + x.length) * we[i]];
  }).sort((a, b) => {
      if (a[1] == b[1]) return a[0] > b[0] ? 1 : -1;
      return a[1] > b[1] ? -1 : 1;
  });

  return arr[n-1][0];

}


console.log(rank('Grace,Michael,David,Mason,James,Logan,Emma,Sofia,William,Lyli,Samantha,Addison,Madison,Abigail,Avery,Natalie,Chloe,Olivai,Sophia,Emily,Jayden,Willaim,Ella,Mia,Lily,Aiden,Naoh,Aubrey,Robert', [6,2,5,2,2,1,1,3,3,5,4,1,2,2,6,2,6,2,2,4,2,4,3,2,6,1,6,2,5], 2));
//console.log('A'.charCodeAt());

/**
 * function rank(st, we, n) {
  if (typeof st === null || !st.length) return  "No participants";
  if ((st.match(/[,]/g).length +1) < n) return "Not enough participants";
  let arr = st.split(',').map((x,i)=>{
    let name = x.split('');
    return {name:x, value:(name.map(x=>x.toUpperCase().charCodeAt()-64).reduce((a,c)=>a+c,0) + x.length)*we[i]};
  });
  arr.sort((a,b) => +b.value - +a.value);
  arr.sort((a,b) => {
    if (a.value === b.value) return a.name > b.name;
  });
  console.log(arr, arr[n], n);
  return arr[n-1];
}
 */
