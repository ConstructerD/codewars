function highlight(code) {
  let arr = [];
  for (let i=0; i<code.length; i++){
    let st=``;
    st = code[i];
    while (  (code[i] == code[i+1]) || (isFinite(code[i]) && isFinite(code[i+1]))   ){
      st+=code[i+1];
      i++;
    };
    arr.push(st);
  };
  let res = arr.map(x => {
    let str=``;
    switch (x[0]) {
      case `F`: str = `<span style="color: pink">${x}</span>`; break;
      case `L`: str = `<span style="color: red">${x}</span>`; break;
      case `R`: str = `<span style="color: green">${x}</span>`; break;
      case `0`:
      case `1`:
      case `2`:
      case `3`:
      case `4`:
      case `5`:
      case `6`:
      case `7`:
      case `8`:
      case `9`: str = `<span style="color: orange">${x}</span>`; break;
      case `(`:
      case `)`: str = x;
    };
    return str;
  })

  
  return res.join('');
}

//console.log(highlight("F3RF5LF7"));
console.log(highlight("RRRRR(F45L3)F2"));
/**
 * Expected:    '<span style="color: green">RRRRR</span>(<span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span>)<span style="color: pink">F</span><span style="color: orange">2</span>', 
 * instead got: '<span style="color: green">RRRRR</span><span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span><span style="color: pink">F</span><span style="color: orange">2</span>'
 * 
 */

