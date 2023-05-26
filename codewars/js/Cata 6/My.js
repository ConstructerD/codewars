function persistence(num) {
   //code me
   var str_num = String(num);
   var i = str_num.length;
   var count_multiply=0;
   var new_num;
   
   while (i>1){ 
   new_num=1;
   for (var j=0; j<=i; j++){
   new_num = new_num * str_num[j];
   count_multiply++;
   if (new_num=0){count_multiply--;}
   } //for
   
   String(new_num);
   i = new_num.length;
   } //while
   
   
   return count_multiply;
}