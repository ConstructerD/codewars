let m = 1;
let n=250;
let res=[];


for (let i=m; i<=n; i++){
	let divisors=[];
	for (let j=0; j<=i; j++){
		if (i % j == 0) divisors.push(j);
	}
	/*
	let sum=0;
	for (let j=0; j<divisors.length; j++){
		sum+=divisors[j]*divisors[j];
	}
	*/
	const sum = divisors.reduce((s, e) => s + e * e, 0);
	if ( (Math.sqrt(sum).toString()).indexOf(".") == -1 ) {
		const pair=[0,0];
		pair[0]=i;
		pair[1]=sum;
		res.push(pair);
	}//console.log(Math.sqrt(sum));
	console.log(i,sum,divisors);

}
console.log(res);

/*
Умное решение проверять число на то, что оно целое:
 if ( Math.sqrt(temp) % 1 == 0) 

еще одно решения проверки на деление без остатка
if (!(n % x)) {
      out.push(x);
    }
поиск суммы через reduce
const sum = divisors.reduce((s, e) => s + e * e, 0);


*/