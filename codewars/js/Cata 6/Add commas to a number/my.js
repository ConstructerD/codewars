var num=-591636.381;

//function commas(num){
  var temp = num.toString();
  var posDot = temp.indexOf(".");
  var arr = [];
  var strBegin = "";
  var strEnd = "";

  if (posDot == -1){
    strBegin = temp;
  } else {
    strBegin = temp.slice(0, posDot);
    strEnd = temp.slice(posDot+1);
  };
  arr = strBegin.split('').reverse();


  var str = "";
  //if has not dot in number
  for (var i = 0; i < arr.length; i++){
    str+=arr[i];
    if (i%3 === 2 && arr[i+1]!="-")  str += ",";
  };
  
  if (str[str.length-1] == ",") str = str.slice(0, str.length - 1);


  strEnd="0."+strEnd;
  strEnd=(Math.round(1000*strEnd)/1000)+"";
  strEnd=strEnd.slice(2);

  if (posDot == -1){
    str=str.split("").reverse().join("");
  } else {
    str=str.split("").reverse().join("") + "." + strEnd;
  };

  
  

console.log(str);


//return str
//}
/*
function commas(number) {
  return (+number.toFixed(3) + '')
    .replace(/\d(?=(\d{3})+($|\.))/g, '$&,')
}
*/