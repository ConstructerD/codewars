
var t0 = performance.now();




var n=56;
//function pythagoreanTriplet (n) {
var triplet = [1,1,1];
var a, b, c;
for (a=1; a<200; a++){
  for (b=2; b<200; b++){
    for (c=3; c<200; c++){
      if ( a*b*c==n && a*a+b*b==c*c){
        triplet[0]=b;
        triplet[1]=a;
        triplet[2]=c;
      };//if
    };//for c
  };//for b

};// for a

console.log(triplet);
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4));
//alert(triplet);
//return triplet;
//}

