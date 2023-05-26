let input="qazwsxedcrfvtgbyhnujmikl";

function vowelRecognition(input){
  const vowel = /[^aeiouAEIOU]/g;
  let a = [...input].map( (x, index, arr) => {
      let b=[];
      for (let i = 0, str = ''; i<arr.length; i++){
        if (arr[index] != undefined) {
          str += arr[index];
          index++;
          b.push(str);
        }
      }
      return b})
      .reduce((acc, x) => acc.concat(x),[])
      .map(  x => x.replace(vowel,''))//{
//        let acc = 0;
//        for (let i = 0; i < x.length; i++){
//          for (let j = 0; j < vowel.length; j++) {
//            if (x[i] == vowel[j]) acc++;
//          }
//        }
//        return acc;

//        })
       .reduce((acc, x) => acc + x.length, 0)


  
  return a;
}

function vowelRecognition1(input){ 
  const vowel = /[^aeiouAEIOU]/g;
  let a = [...input].map( (x, index, arr) => {
      let b=[];
      for (let i = 0, str = ''; i<arr.length; i++){
        if (arr[index] != undefined) {
          str += arr[index];
          str = str.replace(vowel,'');
          index++;
          b.push(str.length);
        }
      }
      return b})
      .reduce((acc, x) => acc.concat(x),[])
      .reduce((acc, x) => acc + x, 0)
      return a;
}

function vowelRecognition2(input){ 
  const vowel = /[^aeiouAEIOU]/g;
  let b = 0;
  let a = [...input].forEach( (x, index, arr) => {
      
      for (let i = 0, str = ''; i < arr.length; i++){
        if (arr[index] != undefined) {
          str += arr[index];
          str = str.replace(vowel,'');
          index++;
          b += str.length;
        }
      }
      });
  return b;
}

function vowelRecognition3(input){ 
  const vowel = /[^aeiou]/gi;
  let b = 0;
  let a = [...input].forEach( (x, index, arr) => {
    if (/[aeoui]/gi.test(arr[index])) {
      b += (arr.length - index) + index * (arr.length - index);
    }
  });
  return b;
}


console.log(vowelRecognition(input));
console.log(vowelRecognition1(input));
console.log(vowelRecognition2(input));
console.log(vowelRecognition3(input));

/***
 * let a = [...input].map( (x, index, arr) => {
    for (let i = 0, str = ''; i<input.length; i++){
      
      if (arr[index] != undefined) {str += arr[index];
      index++;
      b.push(str);
      }
    };
    return b;
  });
 */