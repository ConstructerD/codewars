var a=2154959208;

var b=a.toString(2);
var newB=b;
var arr=[];
var txt="";
for (var i=b.length; i<32; i++){newB = "0"+ newB};
arr[0]=newB.substr(0,8);
arr[1]=newB.substr(8,8);
arr[2]=newB.substr(16,8);
arr[3]=newB.substr(24,8);
text=""+parseInt(arr[0],2)+"."+parseInt(arr[1],2)+"."+parseInt(arr[2],2)+"."+parseInt(arr[3],2);

alert (text);