let text = "Indivisibilities";

function duplicateCount(text){
  let str = text.toLowerCase();
  let arr = [];
  console.log(str);
  console.log(str.length);

  while (str.length > 0)  {
    let temp = str.split(str[0]);
    let count = temp.length-1;
    console.log(str, count);
    if (count > 1) arr.push(count);
    str = temp.join('');
    //str = str.split(str[0]).join('');
    //console.log("after  " + str, count);
  }
  
  /*
  const count = (str, char) => [...str].filter(a => a==char);
  let qq = [...text].map( a => count(text, a).length);
  let ww = qq.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  //if ("1" in ww) delete ww.1;  
  console.log(qq, ww);
  return Object.keys(ww).length;
}
*/
/*

for (let i=0; i<text.length; i++){
  let char = text[i];
  let count = 1;
  for (let j = 0; j<arr.length; j++){
    if (arr[j][0] == char) {
      arr[j][1]++
    } else {
      arr.push([char, count]);
    }
  }
}
*/
console.log(arr);
return arr.length;
};


//console.log(duplicateCount(text));

/*
var result = [1, 3, 4, 1, 1, 3, 4, 5].reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
*/


function dupCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    console.log(arr.indexOf(val), arr.lastIndexOf(val), i, arr.indexOf(val) !== i, arr.lastIndexOf(val) === i);
    //console.log(arr);
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    
  }).length;
}

console.log(dupCount(text));