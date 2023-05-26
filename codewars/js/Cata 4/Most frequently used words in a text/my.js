let text="//wont won't won't ";

function topThreeWords(text) {
  let regexp = /[":",",","/"]/gi;
  //let regexp = /\w+/;
  text = text.replace(regexp,"");
  console.log(text);
  let arr = text.toLowerCase().split(" ");
  let res = [];
  
  while (arr.length > 1){
    let word = arr[0];
    const result = arr.filter(w => w == word);
    const count = result.length;
    if (word != "") res.push([word, count]);
    for (let j = 0; j<count; j++){
        let pos = arr.indexOf(word);
        arr.splice(pos,1);
    }
  }  
  res.sort( (a,b) => b[1] - a[1]);
  let output = [];
  if (res.length > 3) res.length = 3;
  for (let i=0; i<res.length; i++){
    if (res[i][0] !== "undefined") output[i] = res[i][0];
  }
  return output;
}


/*
const topThreeWords = text => 
  Object
    .entries((text.toLowerCase().match(/[\w']+/g) || []).reduce((o, w) => (o[w] = (o[w] || 0) + 1, o), {}))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(p => p[0])
    .filter(r => /\w+/.test(r));
*/
console.log(topThreeWords(text));


