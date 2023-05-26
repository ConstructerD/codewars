let word = "CodeWarrior";

function duplicateEncode(word){
    let arr =  word.toLowerCase().split("");
    let ww = arr.map(elem => {
        let j=0;
        for (let i = 0; i < word.length; i++) if (arr[i] == elem) j++;
        if (j == 1) return "(" ;
         return ")";
    })

return ww.join("");
}

const dup = (word) => {
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')' 
    })
    .join('');
}
alert (dup(word));

let count = (str, char) => str.split(char);//.length-1;
alert(count(word,"r"));