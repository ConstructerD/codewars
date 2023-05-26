function partialTeacher(s){
  let arr = Array(s.length+1).fill(0);
  [...s].map((x,i,a) => {
    if (x === 'L') {
      if (arr[i] === arr[i+1] ) {
        arr[i]  += 2;
        arr[i+1]+= 1;
      } else {for (let j = i; j >= 0; j--) {
          if (a[j] === 'L' && arr[i] > arr[i+1]) {
            arr[j]++;
          } else {break};
        }
        arr[i+1]++;
      }

    } else if (x === 'R') {
      if (arr[i] === arr[i+1] ) {
        arr[i+1] += 2;
        arr[i]++;
      } else {arr[i+1] = arr[i] + 1;}

    } else if (x === '=') {
      if (arr[i] === arr[i+1]) {
        arr[i]++;
        arr[i+1]++;
      } else {arr[i+1] = arr[i]};
    }
  })
return arr;
}

let s='RLRL'; //[1, 2, 1, 2, 1, 1]
console.log(partialTeacher(s));
console.log(partialTeacher('=RRR'));
