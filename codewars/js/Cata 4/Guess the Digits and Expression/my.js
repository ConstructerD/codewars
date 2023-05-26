let exp =
`    FBEACGD
*       EEAC
-------------
= 9480616606 `;

let exp1 =
`        DAFCEBG
*        CDBEBG
----------------
= 1551245297849`;
let exp2 =
`         FDBAEGC
*        EGGAGAC
-----------------
= 64794281869471`; //Expected: '\'6782951 * 9552521 = 64794281869471
let exp3 =
`EADCFB
*      E
---------
= 183956 `

const factors = (n) => {
  let j = 1;
  let i = 2;
  let a = [];
  if (n==1) return [1];
  if (n==2) return [2];
  do {
    if (n % i == 0){
      a[j] = i;
      j++;
      n = n / i;
    } else  {
    i++;
    }
  }
  while (i < n);
  a[j] = i;
  a=a.slice(1);

return a;
}

function guessExpression1(exp){
  console.log(exp);
  let st = exp.split('\n').map(x=>x.replace(/[^A-Z0-9]/g,''));
  let letters = [...new Set (st[0]+st[1])];
  let num = [];
  let res = '';
  let min = Math.pow(10,letters.length-1);
  let max = Math.pow(10,letters.length);
  for (i = min; i< max; i++){
    let temp = ''+i;
    if (/[0]/.test(temp) ) continue;

    let nums = [...new Set (temp)];
    if (temp.length == nums.length) {
      for(j=0; j<letters.length; j++) num[j]=temp[j];

      let factor1 = +st[0].split('').map(x=>num[letters.indexOf(x)]).join('');
      let factor2 = +st[1].split('').map(x=>num[letters.indexOf(x)]).join('');
      let result = +st[3];
      console.log(factor1, factor2, factors(result));

      if (factor1*factor2 === result) {
        res = `${factor1} * ${factor2} = ${result}`;
        console.log('opa',res);
        break;
      } else {
        // console.log(`begin ${factor1} * ${factor2} = ${factor1*factor2}`);
        // factor1 += Math.pow(10,letters.length-1);
        // factor2 += Math.pow(10,st[1].length-1);
        // console.log('end',factor1,factor2, factor1*factor2);
      }
    }
  }
return res;
}

function guessExpression(exp){
  console.log(exp);
  let st = exp.split('\n').map(x=>x.replace(/[^A-Z0-9]/g,''));
  let fs = factors(+st[3]);
  let bin = (Math.pow(2, fs.length)-1);
  let pairs = [];

  const isGood = (num1, let1, num2, let2) => {
    num1 = num1 + '';
    let fact = let2.split('').map(x=>num1[let1.indexOf(x)]).join('');
    console.log(`fact= ${fact}, let1= ${let1} num1 = ${num1}
    let2 = ${let2} num2=${num2} ${fact==num2}`);
    if (fact == num2) return true;
    return false;
  }

  for (i=0; i<bin; i++) {
    let temp = 1;
    let text = i.toString(2);
    if (text.length < fs.length) text ="0".repeat(fs.length-text.length) + text;
    for (j=0; j<fs.length; j++) if (text[j]!=0) temp*=fs[j]*(+text[j]);

    //console.log(temp, text);

    let str = '' + temp;
    let str2 = '' + +st[3]/temp;
    // if (str.length == st[0].length
    //   && str2.length == st[1].length
    //   && [...new Set (str)].length == [...new Set (st[0])].length
    //   && [...new Set (str2)].length == [...new Set (st[1])].length
    //   && [...new Set (str+str2)].length == [...new Set (st[0] + st[1])].length
    //   ) pairs.push(temp, +st[3]/temp) ;

    if (str.length == st[0].length
      && str2.length == st[1].length
      && isGood(temp,st[0],+st[3]/temp,st[1])
      ) {pairs.push(temp, +st[3]/temp) ; break}

  }
  console.log(pairs);

  console.log('isGood=',isGood(st[3],st[0],1,st[1]));

  if (isGood(st[3],st[0],1,st[1])) {pairs.push(+st[3]); pairs.push(1)};
  let f1=st[0];
  let letters = pairs.map(x => (x+'').split('').map((w,i)=>f1[i]).join(''));

console.log(f1,letters);
  let res = `${pairs[0]} * ${pairs[1]} = ${st[3]}`;

return res;
}


console.log(guessExpression(exp3));
//console.log(guessExpression1(exp2));
