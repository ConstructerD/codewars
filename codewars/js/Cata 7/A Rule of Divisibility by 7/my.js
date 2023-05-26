function seven(m) {
    // your code
    var arr = [0,0];
    var strM = String(m);
    var x,y;
    var newM = m;
    
   while (strM.length>2){
      x = Number(strM.substring(0,strM.length-1));
      y = Number(strM.substring(strM.length-1));
      newM = x-2*y;
      alert(x + "-2x" + y+"="+newM) ;
      strM = String(newM);

/*      if (newM>63) {strM = String(newM);
		    break;}
	else {arr[0]=newM;
		break;}
*/      
	arr[0]=newM;
	arr[1]=arr[1]+1;
    }
    
    //arr[0]=35;
    //arr[1]=strM.length;
    return arr;
}

var myArr = seven (1603);
alert("itogo  " + myArr);