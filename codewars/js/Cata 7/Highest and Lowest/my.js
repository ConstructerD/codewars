function highAndLow(numbers){
  
  var arr=numbers.split(" ");
  arr=arr.sort(function(a, b){return a - b; });
  return arr[arr.length-1] + " " + arr[0];
}