var str="EBG13 rknzcyr.";   

//function rot13(str) {
  var arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
  var rot="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split('');
  var res="";
  var pos=0;
  for (var i=0; i<str.length; i++){
    pos=arr.indexOf(str[i]);
    if (pos !=- 1){
      res+=rot[pos];
    } else {
    res+=str[i]};
  };
//  return res;
//}
console.log(str);
console.log(res);
