var text="This is a test!";
var newtext;
// "hsi  etTi sats!"
//"This kata is very interesting!"

function encrypt(text, n) {
var str1,str2,res;

res=text;

for (var j=1; j<=n; j++){
str1="";
str2="";

for (var i=0; i<text.length; i++){
str1=str1 + res.charAt(i);
str2=str2 + res.charAt(i+1);
i++;}; //for l

res = str2+str1;

} //for j


return res;
}

/*
function decrypt(encryptedText, n) {
var res;

res=encryptedText;

for (var j=1; j<=n; j++){
var k;
k=encryptedText.length/2;
for (var i=0; i<k ; i++){
//str1=str1 + res.charAt(i);
//str2=str2 + res.charAt(i+1);
//i++;
res = res.charAt(2k*i)+res.charAt(i);
}; //for l

//res = str2+str1;

} //for j


return res;
}
*/


newtext = encrypt(text, 1);
alert(newtext);
newtext = encrypt(text, 2);
alert(newtext);
newtext = encrypt(text, 3);
alert(newtext);
newtext = encrypt(text, 4);
alert(newtext);