var n=123456789;

function thirt(n) {
   var newN = n.toString();
   var m=[1, 10, 9, 12, 3, 4];
   var th=[];
   var j=0;
    
    while (j<5){
      var arr=newN.split('');
      var sum=0;
      arr.reverse();
      for (var i=0; i<newN.length; i++){
          sum+=arr[i]*m[i%6];
      };
      th.push(sum);
      newN=sum.toString();
      j++;
    }; //while
    return sum;
}
alert (thirt(n));

/*
function thirt(n) {
    // your code
    let seq = [1,10,9,12,3,4];
    let prev=0;
    let cur=n;
    while(cur !=prev){
      prev=cur;
      cur = cur.toString().split('').reverse().reduce((s,d,i)=>{
         s = s+ Number(d) * seq[i%seq.length];
         return s;
       },0);
    }
    return cur;
    

     
}

*/