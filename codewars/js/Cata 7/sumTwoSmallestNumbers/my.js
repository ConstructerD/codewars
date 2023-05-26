function sumTwoSmallestNumbers(numbers) {  
  var min1,min2,i,max,j;
  
  min1 = numbers[0];
  max=min1;
  j=numbers.length;
  for (i=0; i<j; i++){
  if (numbers[i]<min1) {min1=numbers[i];}
  if (numbers[i]>max) {max=numbers[i];}
  }// for
  
  min2 = max;
  for (i=0; i<j; i++){
  if (numbers[i]<=min2 && numbers[i]!=min1) {min2=numbers[i];}
  }// for

return min1+min2;
};