let a = [ [1, 2], [1, 2] ];
let b = [ [2, 3], [2, 3] ];


function matrixAddition(a, b){
  let c = [];
  let x = a.length;
  let y = a[0].length;
    console.log(a[0].length);
    for (let i = 0; i < x; i++){
      c[i]=[];
      for (let j = 0; j < y; j++){
        c[i][j] = a[i][j] + b[i][j];
      }
    }
  return c;
}

console.log(matrixAddition(a, b));

/**
 * 
function matrixAddition(a, b){
let m = a.length; 
let n = a[0].length; 
let c = [];
    for (let i = 0; i < m; i++)
     { c[ i ] = [];
       for (let j = 0; j < n; j++) {
         c[i][j] = a[i][j] + b[i][j]
       }
     }
    return c;
}
 */