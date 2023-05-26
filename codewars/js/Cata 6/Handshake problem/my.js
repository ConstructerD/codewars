function getParticipants(handshakes){
  
var people=0;
    
  function getMaxHandshakes(value){
  var sum = 0;
  for (var i=0; i<value; i++){sum+=i;};
  return sum;
  } // function
  
for (var i=0; i<10000; ++i){
if (getMaxHandshakes(i)<handshakes) {people=i};
}
return people+1;
}