function printNumber(num, ch) {
 
function printNumber(num, ch) {
   var a1 = [[0,0,1,1,0,0],
 [0,1,1,1,0,0],
 [1,0,1,1,0,0],
 [0,0,1,1,0,0],
 [0,0,1,1,0,0],
 [1,1,1,1,1,1]];
 var a2 = [[0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [0,0,0,1,1,0],
 [0,0,1,1,0,0],
 [0,1,1,0,0,0],
 [1,1,1,1,1,1]];
 var a3 = [[0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [0,0,0,1,1,0],
 [0,0,0,1,1,0],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0]];
 var a4 = [[1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [0,1,1,1,1,1],
 [0,0,0,0,1,1],
 [0,0,0,0,1,1]];
 var a5 = [[1,1,1,1,1,1],
 [1,1,0,0,0,0],
 [1,1,1,1,1,0],
 [0,0,0,0,1,1],
 [0,0,0,0,1,1],
 [1,1,1,1,1,0]];  			  			 			 			
 var a6 = [[0,0,0,1,1,0],
 [0,0,1,1,0,0],
 [0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0]];
 var a7 = [[1,1,1,1,1,1],
 [1,1,0,0,1,1],
 [0,0,0,1,1,0],
 [0,0,1,1,0,0],
 [0,1,1,0,0,0],
 [0,1,1,0,0,0]];
 var a8 = [[0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0],
 [0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0]];  			
 var a9 = [[0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0],
 [0,0,1,1,0,0],
 [0,1,1,0,0,0]];  			
 var a0 = [[0,1,1,1,1,0],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [1,1,0,0,1,1],
 [0,1,1,1,1,0]];


//Read and convert number to Array of letters
var letters = ["0","0","0","0","0"];

var str;
str = String(num);
for (var i=0; i<str.length; i++){
	letters[i+5-str.length]=str.charAt(i);

};

//alert( 'Привет\nМир' );

//create BigStr
var BigStr;
var arrStr = ["","","","","","","","","",""];

//1 string
BigStr=ch;
for (var i=0; i < 39; i++) {
	BigStr += ch;
}

arrStr[9]+=BigStr; //last string without \n
BigStr+="\n";
arrStr[0]+=BigStr;


//2string
BigStr="";
BigStr=ch;
for (var i=0; i < 38; i++) {
	BigStr += " ";
}
BigStr+=ch +"\n";
arrStr[1]+=BigStr;
arrStr[8]+=BigStr;

//3..8 strings
BigStr="";

var newStr="";
for (var k = 0; k <= 5; k++) {
	// create new bigStr
	for (var j = 0; j <= 5; j++) {
	//create new strings from letters
	switch (letters[j]){
		case "0":
		for (var i = 0; i <= 5; i++) {if (a0[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "1":
		for (var i = 0; i <= 5; i++) {if (a1[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "2":
		for (var i = 0; i <= 5; i++) {if (a2[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "3":
		for (var i = 0; i <= 5; i++) {if (a3[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "4":
		for (var i = 0; i <= 5; i++) {if (a4[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "5":
		for (var i = 0; i <= 5; i++) {if (a5[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "6":
		for (var i = 0; i <= 5; i++) {if (a6[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "7":
		for (var i = 0; i <= 5; i++) {if (a7[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "8":
		for (var i = 0; i <= 5; i++) {if (a8[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		case "9":
		for (var i = 0; i <= 5; i++) {if (a9[k][i]==0) {newStr+=" "} else {newStr+=ch};}
			break
		default:
	}
	newStr+=" ";
} //for j
BigStr+=ch+"  "+newStr+ch+"\n";
arrStr[k+2]+=BigStr;
newStr="";
BigStr="";
} //for n

BigStr="";
for (var i = 0; i <= 9; i++) {
	//document.writeln(arrStr[i]+"\n");
	BigStr+=arrStr[i];
}
//alert(BigStr);
return BigStr;
}



printNumber(891,"*");
