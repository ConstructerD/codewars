var moveZeros = function (arr) {
  var zeroArr = arr.filter(function(value){return value!==0;});
  for (var i=zeroArr.length; i<arr.length; i++){zeroArr.push(0)};
return zeroArr;  

}