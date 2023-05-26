function solution(list) {
  let arr = [];
  let range = true;
  let oldRange = false;
  let posEnd = 0;
  for (let i = 0; i < list.length; i++) {
    let st = list[i];
    let n1 = list[i + 1] | 0;
    let n2 = list[i + 2] | 0;

    st + 1 == n1 && st + 2 == n2 ? (range = true) : (range = false);

    if (oldRange == false) {
      if (range) {
        st = st + "-";
        posEnd = i + 2;
        //arr.push(st);
      } else {
        st = st + "";
        if (i == posEnd) arr.push(st);
      }
    } else {
      if (range) {
        posEnd = i + 2;
      } else {
        if (i == posEnd) {
          st = st + "";
          arr.push(st);
        }
        posEnd = i+1;
      }

      //arr.push(st);
    }
    console.log(st, n1, n2, ` (oldRange = ${oldRange} & range = ${range} ) `, `(i = ${i} posEnd=${posEnd})`, i==posEnd);
  }
  console.log(arr);
  return arr.join(",");
}

let list = [-6,  -3,  -2,  -1,  0,  1,  3,  4,  5,  7,  8,  9,  10,  11,  14,  15,  17,  18,  19,  20];
//"-6,-3-1,3-5,7-11,14,15,17-20"

console.log(solution(list));
