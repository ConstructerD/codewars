const strng = "bsjq";
const arr = ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"];


function containAllRots(strng, arr) {
  // your code
  if (strng=="") return true;
  for (let i = 0; i<strng.length; i++){
    let a = '';
    let b = '';
    for (let j = 0; j < i; j++){ 
      a += strng[j];
    }
    for (let j = i; j<strng.length; j++){
      b += strng[j];
    }
    let s = b + a;
    if (arr.indexOf(s)==-1) return false;
    console.log("ahhh  ", a, b, s);
  }
  return true;
}

console.log(containAllRots(strng, arr));