function sumTwoSmallestNumbers(numbers) {  
  var min1,min2,i;
  
  min1 = numbers[0];
  min2 = min1;
  
  for (i=0; i<numbers.length; i++){
  if (numbers[i]<min1) {min1=numbers[i];}
  if (numbers[i]>min2) {min2=numbers[i];}
  }// for
  
  for (i=0; i<numbers.length; i++){
  if (numbers[i]<=min2 && numbers[i]!=min1) {min2=numbers[i];}
  }// for

return min1+min2;
};