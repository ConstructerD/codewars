var a="";
var b="08567";

//function sumStrings(a,b) { 
  //var sum=0;
  if (a.length==0 || isNaN(a)) {a="0"};
  if (b.length==0 || isNaN(b)) {b="0"};
  
  var arrA=a.split('');
  var arrB=b.split('');
  var arrC=[];
  var big=arrA.length;
  if (arrB.length>arrA.length){big=arrB.length};
  var res=0;
  
  arrA.reverse();
  arrB.reverse();
  for (var i=0; i<big; i++){
    if ( isNaN(arrA[i]) ){arrA[i]=0;};
    if ( isNaN(arrB[i]) ){arrB[i]=0;};
    res=parseInt(arrA[i]) + parseInt(arrB[i]);
    
    if (arrC[i]==1){res++};
    
    if (res>9){
      res = res-10; 
      arrC[i+1]=1;
      //arrC[i]=res;
    };

    arrC[i]=res;
  };


  arrC.reverse();
  if (arrC[0]==0){arrC.shift()};
  var str="";
  for (var i=0; i<arrC.length; i++){str+=arrC[i]};
  //return str;
//}

alert(str);
