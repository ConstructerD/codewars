
var input="apples, plums % and bananas\npears\noranges !applesauce";
var markers =["%", "!"];

/*
function solution(input, markers) {
var str="";
var flag1=true;
var flag2=true;


for (var i=0; i < input.length; i++){

  if (input[i]==markers[0] || input[i]==markers[1]) {flag1=false}
  else {flag1=true};
  
  if (input[i]=="\\" && input[i+1]=="n" ) {flag2=false}  
  else {flag2=true};
  
  if(flag2){
    str+=input[i];
  };//if
alert("str=>"+str+" "+flag1+" "+flag2);  
};//for

  return str;
};
*/

//alert (solution(input, markers));

var pos1 = -1, pos2 = -1;
var text;
var str;

str=input;
for (var i=0; i<markers.length; i++){
	while ((pos1 = str.indexOf(markers[i], pos1 + 1)) != -1) {
	  
		pos1=str.indexOf(markers[i]);
		pos2=str.indexOf("\n");
		if (pos2 == -1 || pos2 < pos1){pos2=str.length};

		text=str.slice(pos1,pos2);
		text=str.replace(text,"");

	}; //while
	
	
	str=text;
  if (str[str.length-1]==" "){str=str.slice(0,str.length-2)};
}; //for i


alert(text.indexOf(" \n"));
text=text.replace(" \n","\n");
text=text.slice(0,text.length-1);
alert(pos1 + " ->" + text);