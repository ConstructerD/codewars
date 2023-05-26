let a = ["Banana", "Orange", "Apple", "Mango", 0, 2, 2];


function dbSort(a){
  const num = a.filter(n => typeof n == "number");
  const str = a.filter(n => typeof n == "string");
  num.sort((a,b) => a-b);
  str.sort();
  const res = num.concat(str);
  return (res);
}
alert(dbSort(a));

//console.log(num, str);
//console.log(res);

const dbSortA = a =>{
	const num = a.filter(n => typeof n == "number");
    const str = a.filter(n => typeof n == "string");
    num.sort((a,b) => a-b);
    str.sort();
    return num.concat(str);
}

alert(dbSortA(a));

function dbSortB(a){
// Code here
  return a.sort((a,b)=>{
	  let x=typeof a,
	      y=typeof b;
	   return x<y ? -1 : x>y ? 1 : a<b ? -1 : a>b ? 1 : 0; //нихуя не понял. 4 "если" подряд. Зачем?
  })
}
alert(dbSortB(a));