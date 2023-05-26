let u = "I should have known that you would have a perfect answer for me!!!";
let v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];

const  cesar = (c, s) => {
  let code = c.charCodeAt();
  if (code >=65 && code <= 90) {
    code +=s%26;
    code >90 ? code -= 26 : code;
  }
  if (code >=97 && code <= 122) {
    code +=s%26;
    code >122 ? code -= 26 : code;
  }
  return String.fromCharCode(code);
}

function movingShift(s, shift) {
  let arr = ['','','','',''];
  let lastPart = s.length % 4;
  let part = (s.length - lastPart) / 4;
  while (part - 1 >= lastPart + 4){
    part -= 1;
    lastPart +=4;
  }
  //console.log(`Length of message = ${s.length} 4 message by ${part} and last by ${lastPart}`);
  for (let i=0; i<5; i++){
    for (let j=0; j<part; j++){
      let pos = i*part+j;
      if (pos < s.length) arr[i] = arr[i] + cesar(s[i*part+j],i*part+j+shift);
    }
  }
  return arr;
}

function demovingShift(arr, shift) {
  let pos = 0;
  let part = arr[0].length;
  return arr.map((x,i) => {
    let st='';
    for (let j=0; j<x.length; j++){
      pos=i*part+j;
      st+=cesar(x[j],26 - pos%26 -shift);
    }
    return st;
  }).join('')
}

console.log(movingShift(' uoxIirmoveNreefckgieaoiEcooqo',2));
//'[\' xscOp\', \'zvygqA\', \'ftuwud\', \'adaxmh\', \'Edqrut\']'
v= movingShift(' uoxIirmoveNreefckgieaoiEcooqo',2);
console.log(demovingShift(v, 1))
console.log(cesar('v',23));
