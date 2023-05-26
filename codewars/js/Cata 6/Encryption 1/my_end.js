function encrypt(text, n) {
	var str1,str2,res;

	res=text;

	for (var j=1; j<=n; j++){
		str1="";
		str2="";

		for (var i=0; i<text.length; i++){
			str1=str1 + res.charAt(i);
			str2=str2 + res.charAt(i+1);
i++;}; //for i

res = str2+str1;

} //for j


return res;
}

function decrypt(encryptedText, n) {
	var str1,res;

	res=encryptedText;

	for (var j=1; j<=n; j++){
		str1="";


		for (var i=0; i<res.length/2; i++){
			str1 = str1 + res.charAt(i+(res.length/2)) + res.charAt(i);
}; //for i


if (str1.length > res.length) {str1 = str1.substring(0, str1.length - 1);};

res = str1;

} //for j


return res;
}