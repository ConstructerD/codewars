let text = 'Hello World';


function mirror(text){
  let arr = text.split(' ').map(x => x.split('').reverse().join(''));
  let out = [];
  
  let max = arr.reduce( (a, b) => {
    let l1 = a.length;
    let l2 = b.length;
    if ( l1 >= l2) {return a} else {return b};
  } ).length;

  let st = "*".repeat(max + 4);
  out.push(st);
  
  for (let i = 0; i<arr.length; i++) {
    let space = max - arr[i].length;
    st = "* " + arr[i] + " ".repeat(space) + " *";
    out.push(st);
  };
  st = "*".repeat(max + 4);
  out.push(st);

  return out.join('\n');
}

console.log(mirror(text));

