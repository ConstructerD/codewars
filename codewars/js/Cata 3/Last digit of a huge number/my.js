let as=[7,6,2];
//[207914,859680,438192,941692,610430,249728]; //6


function lastDigit(as){
  if (as[0] == undefined) return 1;
  let res =[...as].reduceRight((acc, cur, i, arr) => {
    if (arr.length == 1) return cur % 10;
    if (i == arr.length - 1){
      acc = cur % 4;
      if (cur == 0) acc = -1;
      console.log('last acc=', acc)
    } else {
      acc = ld ((arr[i]), acc)
      console.log(acc)
      
    }
    return acc;
  },0 ) 
  
  console.log(as);

  return res;
}

const ld = (a1, b1) => {
  if (b1 == -1) return 1;
  if (a1 == 0) return 0;
  let acc = 0;
  
  let a = a1 % 10;
  let b = b1 % 4;
  
  if (a == 0) acc = 0;
  if ((a == 0) && (b == 0)) acc = 1;
  
  if (a == 1) acc = 1;
  
  if ((a == 2) && (b == 1)) acc = 2;
  if ((a == 2) && (b == 2)) acc = 4;
  if ((a == 2) && (b == 3)) acc = 8;
  if ((a == 2) && (b == 0)) acc = 6;

  if ((a == 3) && (b == 1)) acc = 3;
  if ((a == 3) && (b == 2)) acc = 9;
  if ((a == 3) && (b == 3)) acc = 7;
  if ((a == 3) && (b == 0)) acc = 1;
 
  if ((a == 4) && (b == 1)) acc = 4;
  if ((a == 4) && (b == 2)) acc = 6;
  if ((a == 4) && (b == 3)) acc = 4;
  if ((a == 4) && (b == 0)) acc = 6;  
  
  if (a == 5) acc = 5;
  
  if (a == 6) acc = 6;

  if ((a == 7) && (b == 1)) acc = 7;
  if ((a == 7) && (b == 2)) acc = 9;
  if ((a == 7) && (b == 3)) acc = 3;
  if ((a == 7) && (b == 0)) acc = 1;

  if ((a == 8) && (b == 1)) acc = 8;
  if ((a == 8) && (b == 2)) acc = 4;
  if ((a == 8) && (b == 3)) acc = 2;
  if ((a == 8) && (b == 0)) acc = 6; 
 
  if ((a == 9) && (b == 1)) acc = 9;
  if ((a == 9) && (b == 2)) acc = 1;
  if ((a == 9) && (b == 3)) acc = 9;
  if ((a == 9) && (b == 0)) acc = 1;
  
  return acc;
};

console.log(lastDigit(as));
//console.log(10%10);
//console.log(ld(859680, 6));