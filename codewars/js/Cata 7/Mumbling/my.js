function accum(s) {
  return s.split("").map( (ch, i, arr) => {
    let str = ch.toUpperCase();
    for (let j = 0; j<i; j++){str += ch.toLowerCase();}
    return str;
    }).join("-");
}