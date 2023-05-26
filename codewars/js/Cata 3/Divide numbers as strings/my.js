function largeDiv(a, b) {
  let res = '';
  let idx = 0;
  let temp = +a[idx];
  console.log(`a=${a} a[idx]=${a[idx]} temp=${temp}  ${typeof temp}`);
  while ( temp<b ) {
    temp = temp*10 + Number(a[idx+1]);
    console.log(temp,idx);
  }
  console.log('after while temp=',temp);
  idx++;


  return a/b;
}

console.log('1 3',largeDiv("1","3"));
console.log('25345 3',largeDiv("25345","3"));

n1 = 8;
n2 = 66;

var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000)
       {
        for (var i = div.length - 3; i > 0; i -= 3)
        {
            result_array.splice(i, 0, ",");
        }
          result_array;
    }
console.log(result_array.join(''));

const permutation = (arr) => {
  if (arr.length===1) return arr;
  let res = [];
  arr.forEach(element => {
    let tmp = permutation(arr.filter(_l => _l !== element));
    tmp = tmp.map(_set => [element, ..._set]);
    res = [...res, ...tmp];
  });
  return res;
}
console.log('самое важное в пермутациях');
console.log(permutation(["a","b","c","d"]));
