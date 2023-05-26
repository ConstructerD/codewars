var arr=[0,1];
for (var i = 2; i < 100; i++){
	arr[i]=arr[i-1]+arr[i-2];
};
function productFib(prod){
  // ...
  var m=1;
  var fibonachi=1;
  while (fibonachi<prod){
  	fibonachi=arr[m]*arr[m+1];
  	m++;
  };
  
  var newArr=[];
  newArr[0]=arr[m-1];
  newArr[1]=arr[m];
  newArr[2]=false;
  if (newArr[0]*newArr[1]===prod){newArr[2]=true};
  
  return newArr;
}

