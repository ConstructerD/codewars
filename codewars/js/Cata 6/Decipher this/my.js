function decipherThis(str) {
  return str.split(' ').map(x => {
    let code = parseInt(x,10);
    let rest = x.slice(-(x.length - (''+code).length));
    if (rest == code) rest = '';
    let temp = String.fromCharCode(code)+rest;
    let st = temp.split('');
    if (temp.length > 2) {
      let t = st[1];
      st[1] = st[temp.length-1];
      st[temp.length-1] = t;
    }
    return st.join('');
  }).join(' ');
}; 