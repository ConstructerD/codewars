var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`
var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`

var b2=`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

var b2sol = `Original Balance: 1233.00\r
125 Hardware 24.80 Balance 1208.20\r
123 Flowers 93.50 Balance 1114.70\r
127 Meat 120.90 Balance 993.80\r
120 Picture 34.00 Balance 959.80\r
124 Gasoline 11.00 Balance 948.80\r
123 Photos 71.40 Balance 877.40\r
122 Picture 93.50 Balance 783.90\r
132 Tyres 19.00 Balance 764.90\r
129 Stamps 13.60 Balance 751.30\r
129 Fruits 17.60 Balance 733.70\r
129 Market 128.00 Balance 605.70\r
121 Gasoline 13.60 Balance 592.10\r
Total expense  640.90\r
Average expense  53.41`
let book=b2;

let arr=[];
let pos1=0, pos2=0;
let regexp=/[^\d\sA-Z.]/gi;

while (pos2 != -1){
  pos2=book.indexOf(String.fromCharCode(10), pos1);
  let str=book.slice(pos1, pos2).replace(regexp,"");
  if (str.length !=0) arr.push(str);
  pos1 = pos2 + 1;
}
let sum = 0, total = 0;
let balance = parseFloat(arr[0]).toFixed(2);
arr[0]="Original Balance: " + balance;
for (let i=1; i<arr.length; i++){
  let pos = arr[i].indexOf(" ",5);
  sum = parseFloat(arr[i].slice(pos));
  balance-=sum;
  total+=sum;
  balance = balance.toFixed(2);
  let str=arr[i].slice(0,pos);
  arr[i]=str + " " + sum.toFixed(2) + " Balance "+ balance;
}
arr[arr.length]="Total expense  "+total.toFixed(2);
arr[arr.length]="Average expense  "+ (total/(arr.length-2)).toFixed(2);

let res=``;
for (let i=0; i<arr.length-1;i++){
  res+=arr[i]+"\r\n";
}
res+=arr[arr.length-1];
console.log(arr);
console.log(res);
/*
'Original Balance: 1687.00\r\n
160 Perfume 71.40 Balance 1615.60\r\n
126 Stamps 13.60 Balance 1602.00\r\n
132 Gasoline 54.00 Balance 1548.00\r\n
003 Hardware 93.50 Balance 1454.50\r\n
130 Gasoline 34.00 Balance 1420.50\r\n
123 Hairdresser 12.20 Balance 1408.30\r\n
Total expense  278.70\r\n
Average expense  46.45',

 instead got: 

'Original Balance: 1687.0\r\n
160 Perfume 71.40 Balance 1615.60\r\n
126 Stamps 13.60 Balance 1602.00\r\n
132 Gasoline 54.00 Balance 1548.00\r\n
003 Hardware 93.50 Balance 1454.50\r\n
130 Gasoline 34.00 Balance 1420.50\r\n
123 Hairdresser 12.20 Balance 1408.30\r\n
Total expense  278.70\r\n
Average expense  46.45'
*/