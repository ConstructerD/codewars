function XO(str) {
    //code here
    var newStr=str.toUpperCase();
    var o = 0, x = 0;
    for (var i=0; i<newStr.length; i++){
      if (newStr.charAt(i)=="O") o++;
      if (newStr.charAt(i)=="X") x++;
      
      };
    if (o==x)  return true;
    return false
    
}