function score( dice ) {
  
  var arr=[0,0,0,0,0,0];
  var sum=0;
  
  for (var i=0; i<dice.length; i++){
    arr[dice[i]-1]++;
  };
  
  if (arr[0] == 1) sum+=100;
  if (arr[0] == 2) sum+=200;
  if (arr[0] == 3) sum+=1000;
  if (arr[0] == 4) sum+=1100;
  if (arr[0] == 5) sum+=1200;
  
  if (arr[4] == 1) sum+=50;
  if (arr[4] == 2) sum+=100;
  if (arr[4] == 3) sum+=500;
  if (arr[4] == 4) sum+=550;
  if (arr[4] == 5) sum+=600;
  
  if (arr[1] >= 3) sum+=200;
  if (arr[2] >= 3) sum+=300;
  if (arr[3] >= 3) sum+=400;
 
  if (arr[5] >= 3) sum+=600;

  return sum;
}