//const BigNumber = require("bignumber.js");
let n=1000000243;

function convert (n, base){
	let arr=[];
	//let str="";
	//let res=0;
	let num=n;
	while (num > 0){
		let res =  num % base;
		num = (num-res)/base;
		if (res>9) res = "x";
		arr.push(res);
	}
	return arr.reverse().join('');
};

let aaa = convert(n,149);
console.log(aaa);

function fouriest(n) {
  console.log(n, typeof n);
  if (typeof n == "string") n = parseInt(n,10);
  let arr = [];
  for (let i=5; i<1500; i++){
    let str =convert( n, i );
    //console.log( str, i );
    if ( ~str.indexOf( "4" ) ){
      const row = [];
      row[0]=str;
      row[1]=i;
      let pos=-1;
      let count4 = 0;
      while ( (pos = str.indexOf("4", pos + 1) ) != -1 ){ count4++; }
      row[2]=count4;
      arr.push( row );
    }
  };
  console.log(arr);
  arr = arr.sort( (a,b) => { if ( b[2]==a[2] ) {
      return a[1]-b[1];
      } else {
      return b[2]-a[2]
      }
    
  } );
  console.log(arr);
  //arr = arr.sort( (a,b) => b[1]-a[1] );
  //console.log(arr);

  return [arr[0][0],arr[0][1]];
}

alert (fouriest(n));
