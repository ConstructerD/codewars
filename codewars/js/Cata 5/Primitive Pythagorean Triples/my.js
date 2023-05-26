
var t0 = performance.now();

let tr = [1,1,1,1];
let a, b, c,k=0;
let set = new Set();
const arr = [];
	for (a=1; a<20; a++){
	  for (b=2; b<20; b++){
		for (c=3; c<20; c++){
		  if (set.has(a+b+c)==false && a*a+b*b==c*c){
			tr[0]=a;
			tr[1]=b;
			tr[2]=c;
			tr[3]=a+b+c;
			if (a<=b && b<=c) {
				/*
				arr[k][0]=tr[0];
				arr[k][1]=tr[1];
				arr[k][2]=tr[2];
				arr[k][3]=tr[3];
				*/
				const ;
				arr.push(a);
				k++;
				console.log(tr);
				};
			set.add(tr[3]);
		  };//if
		};//for c
	  };//for b
	};// for a
	

console.log(set);
console.log(arr);
var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4));

