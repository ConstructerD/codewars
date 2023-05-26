
// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}
Best Practices106Clever19
22ForkCompare with your solutionLink
dzearing, dima-pavlyut, principal.seymoure, Malak777, makravch, imaxue (plus 4 more warriors)
function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}
6 similar code variations are grouped with this oneShow Variations

Best Practices64Clever168
5ForkCompare with your solutionLink
ooflorent
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
Best Practices60Clever39
6ForkCompare with your solutionLink
peol, Raman_Kozar, kamiknx
function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}
Best Practices26Clever185
8ForkCompare with your solutionLink
skyedearmond
function validParentheses(parens){
  var stack = [],
    i;
  
  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    }
    else if('(' !== stack.pop()) {
      return false;
    }
  }
  
  return stack.length === 0;
}
Best Practices10Clever7
1ForkCompare with your solutionLink
master.lincoln, FunGuy, zuka123456, qwerty123456
function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}
Best Practices9Clever38
4ForkCompare with your solutionLink
e-user
function validParentheses (parens){
  return parens.split('').reduce(function (level, c) {
    return level >= 0 ? level + {'(': 1, ')': -1}[c] : -1;
  }, 0) === 0;
}
Best Practices6Clever10
0ForkCompare with your solutionLink
PaulCalvelage
function validParentheses(parens){
  for (var i = 0, depth = 0; i < parens.length; i++) {
    if (parens[i] == '(') depth++;
    if (parens[i] == ')') depth--;
    if (depth < 0) return false;
  }
  return depth == 0;
}
Best Practices5Clever2
0ForkCompare with your solutionLink
arthur.mathies, MistySky
function validParentheses(parens){
  while(/\(\)/.test(parens)){
    parens = parens.replace(/\(\)/g,"");
  }
  return parens.length>0?false:true;  
}
1 similar code variation is grouped with this oneShow Variations

Best Practices4Clever8
2ForkCompare with your solutionLink
stuwilliams47
function validParentheses(parens){
    var prev;
    while(parens.length) {
        prev = parens;
        parens = parens.replace(/\(\)/g, '');
        if (parens === prev) return false;
    }
    return true;
}
Best Practices2Clever20
0ForkCompare with your solutionLink
sashapd
function validParentheses(parens){
  while(parens.indexOf('()') !== -1){
    parens = parens.split('()').join('');
  }
  return parens.length === 0;
}
Best Practices2Clever3
0ForkCompare with your solutionLink
Wisehorn
function validParentheses(parens){
  return !parens.split("").reduce(function(res, curr) { return Math.abs(res) + (curr === "(" ? 1 : -1) }, 0);
}
Best Practices2Clever3
3ForkCompare with your solutionLink
dcieslak
function validParentheses(p){
  while( /\(\)/.test(p) )  p = p.replace(/\(\)/g,''); 
  return p.length == 0;
}
Best Practices2Clever1
0ForkCompare with your solutionLink
tyrsius
function validParentheses(parens){
  var open = 0;
  var walk = parens.split('').every(function(s) {
    return (open += s === "(" ? 1 : -1) >= 0;
  });
  return walk && open === 0;
}
Best Practices2Clever1
0ForkCompare with your solutionLink
olhaar
function validParentheses(parens){
  var obj = {"(":0, ")":0};
  parens.split("").forEach(function(e){
    obj[e] = (obj[e] || 0) + 1;
  });
  return (parens.startsWith(")") || parens.endsWith("(")) ? false : obj["("] === obj[")"];
}
Best Practices2Clever0
0ForkCompare with your solutionLink
Organizma, mbauerlein, adsaro, jage7268, TheGrandCircuit
function validParentheses(parens){
  while(parens.indexOf('()') != -1){
    parens = parens.replace('()', '');
  }
  return !parens.length;
}
4 similar code variations are grouped with this oneShow Variations

Best Practices1Clever8
0ForkCompare with your solutionLink
Stella
function validParentheses(parens){
  //TODO 
  return parens.lastIndexOf('(')<parens.lastIndexOf(')') && parens.indexOf('(')<parens.indexOf(')') && parens.split('(').join('').length===parens.split(')').join('').length;
}
Best Practices1Clever3
1ForkCompare with your solutionLink
leiluo
function validParentheses(parens){
  let box={"{":"}","[":"]","(":")"},arr=[],key;
  for(let i=0;i<parens.length;i++){
    key=parens[i];
    if(box[key]){
      arr.push(key)
    }else{
      if(key!=box[arr.pop()]){
        return false
      }
    }
  }
  return !arr.length;
}
Best Practices1Clever1
0ForkCompare with your solutionLink
Leonxy11
function validParentheses(parens){
    return [...parens].reduce((a,c) => (a+c).replace("()",'') ) == ""?true:false;
}
Best Practices1Clever1
0ForkCompare with your solutionLink
BrookShuihuaLee
function validParentheses(ps){
  let i = 0;
  for (let p of ps) if ((i += {'(': 1, ')': -1}[p]) < 0) return false;
  return i === 0;
}
Best Practices1Clever1
0ForkCompare with your solutionLink
luisgoncalves
function validParentheses(parens){
  try {
      eval(parens.replace(/\(\)/g, '(1+1)').replace(/\)\(/g, ')+('));
  } catch (e) {
      if (e instanceof SyntaxError) {
          return false;
      }
  }
  return true;
}
Best Practices1Clever1
2ForkCompare with your solutionLink
joeylmaalouf
function validParentheses(parens)
{
  sum = 0;
  for (var i = 0; i < parens.length; ++i)
  {
    sum += parens.charAt(i) == "(" ? 1 : -1;
    if (sum < 0) return false;
  }
  return sum == 0;
}
Best Practices1Clever1
1ForkCompare with your solutionLink
leakymirror
function validParentheses(str) {
  var res = str.split('').reduce(function(sum,item) {
    if(item == ')' && sum <= 0) return sum = 100
    return sum += item == '(' || -1
  }, 0)
  return res === 0
}
Best Practices1Clever1
0ForkCompare with your solutionLink
zima-snow
function validParentheses(parens) { 
  if (parens[0] === ')' || parens[parens.length - 1] === '(') return false;

  let res = 0;
  for (let i = 0, l = parens.length; i < l; i++) {
    res = parens[i] === '(' ? res + 1 : res - 1;
  }
  
  return res === 0;
}
Best Practices1Clever0
0ForkCompare with your solutionLink
kirederik
function validParentheses(parens){
  var openParens = 0;
  var closeParens = 0;
  for (var i = 0; i < parens.length; i++) {
    switch (parens[i]) {
    case "(":
      openParens++
      break
    case ")":
      closeParens++
      break
    }
    if (closeParens > openParens) {
      return false
    }
  }
  
  return closeParens == openParens
}
Best Practices1Clever0
0ForkCompare with your solutionLink
HaunterIsMyHomeboy
const validParentheses = p => {
  p = p.replace(/\(\)/g, '');
  return /\(\)/.test(p) ? validParentheses(p) : !p;
}
Best Practices1Clever0
0ForkCompare with your solutionLink
Bobbygllh
function validParentheses(parens){ 
  let gah = parens.split('').sort();
  if (parens.startsWith("(") && parens.endsWith(")") && (parens.length % 2=== 0)) {
    return gah[(gah.length/2)-1] + gah[gah.length/2] === "()";
  } else {
    return false;
  }
}
Best Practices1Clever0
0ForkCompare with your solutionLink
mk-pl
function validParentheses(parens){
  if(parens[0] == ')' || parens[parens.length] == '(' || parens.length == 0 || parens.length >= 100) return false;
  
  var parenthesisCount = 0, isValid = true;
  parens.split('').forEach(function(element, index, array) {
    if(element == '(') {
      parenthesisCount++;
    } else {
      parenthesisCount--;
    }
    if(parenthesisCount < 0){
      isValid = false;
    }
  });
  
  return parenthesisCount == 0 && isValid;
}
Best Practices1Clever0
0ForkCompare with your solutionLink
Zveroboev
function validParentheses(parens) {
 const stack = [];
 
 for (let char of parens) {
   if (char === '(') {
     stack.push(char)
   } else {
     if (stack.length === 0) return false;
     
     stack.pop();
   }
 }
  
  return stack.length === 0;
}
Best Practices1Clever0
0ForkCompare with your solutionLink
bburakoral
function validParentheses(parens){
  var num=0, result=true;
  for(var i=0; i<parens.length; i++){
    if(parens.charAt(i)=='('){num++;} else{num--;}
    if(num<0) result=false;}
  if(num!=0) result=false;
  return result;
}