const data1 = "What do you remember? When I looked at his streaky glasses, I wanted " +
         "to leave him. And before that? He stole those cherries for me at midnight. We were walking " +
         "in the rain and I loved him. And before that? I saw him coming " +
         "toward me that time at the picnic, edgy, foreign.";

const data1Sol =
"\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n" +
"\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n" +
"\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em";


const data2 = "Some say the world will end in fire, Some say in ice. From what I've tasted of desire " +
         "I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate" +
         " To say that for destruction ice Is also great And would suffice."

const data2Sol =
"fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
"\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n" +
"\vuroaf h vi ti o\n\vfent I iotd nfr"



function code(s) {
  let d = Math.ceil(Math.sqrt(s.length));
  // console.log(d, s.length);
  let arr = [];
  for (let i = 0; i < d; i++) {
    let st = s.substr(i * d, d);
    if (st.length < d) st += String.fromCharCode(11).repeat(d-st.length);
    arr.push(st);
  }
  // console.log(arr);
  let rotated = arr.map((x,i,a)=>{
    let st=''
    for (let j=0; j<d; j++){
      st+=a[j][i];
    }
    return st.split('').reverse().join('');
  })
  // console.log(rotated);
  return rotated.join('\n');
}

function decode(s) {
  return s
    .split("\n")
    .map(x =>
      x
        .split("")
        .reverse()
        .join("")
    )
    .map((x, i, a) => {
      let st = "";
      for (let j = 0; j < x.length; j++) {
        if (a[j][i].charCodeAt(0) !== 11) st += a[j][i];
      }
      return st;
    })
    .join("");
}

//console.log(code(data1));
console.log(decode(code(data1)));
//console.log(String.fromCharCode(11));
