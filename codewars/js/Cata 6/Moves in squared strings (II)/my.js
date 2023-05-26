let st = "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL";

function rot(strng) {
  return strng
    .split('\n')
    .reverse()
    .map(x=>x.split('').reverse().join(''))
    .join('\n');
}
function rot1(s) {
  return s.split("").reverse().join("");
}

function selfieAndRot(strng) {
  let selfie = strng
    .split('\n')
    .reverse()
    .map(x=>x.split('').reverse().join(''))
    .join('\n');
  return strng
    .split('\n')
    .map(x=>x+'.'.repeat(x.length))
    .join('\n') + '\n' +
  selfie
    .split('\n')
    .map(x=>'.'.repeat(x.length)+x)
    .join('\n')
}

function oper1(fct, s) {
  if (fct === rot) {return rot(s);}
    else if (fct === selfieAndRot) {return selfieAndRot(s);}
}

function oper(fct, s) {
  return fct(s);
}

//console.log(rot(st), rot1(st));
//console.log(selfieAndRot(st));
//'LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif'

console.log(oper(rot, st));
