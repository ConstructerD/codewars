function persistence(num) {

   let n = num.toString().split("");;
   let c = 0;
   while (n.length !=1){
     let m = n.reduce(function(mul,cur) {
       return mul*cur;   
     },1);
     n = m.toString().split("");
     c++;
   }
   return c;
}