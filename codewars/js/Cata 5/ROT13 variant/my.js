let str="EBG13 rknzcyr.";   

function rot13(str) {
  let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
  let rot="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('');
  
  
  let res = str.split('').map( (ch) => {
    let pos = arr.indexOf(ch);
    if (pos != -1) return rot[pos];
    return ch;

  }).join("");
  
  
  return res;
}
let n=789;
function jumpingNumber(n){
  let arr = n.toString().split('');
  if (n.length == 1) return "Jumping!!";
  for (let i = 0; i < arr.length-1; i++){
    if ( Math.abs(+arr[i] - arr[i+1]) != 1) return "Not!!"
  }
  return "Jumping!!"
}

const jumpingNumber = n => n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';
//а вот как можно заменить моё творчество


alert(jumpingNumber(n));