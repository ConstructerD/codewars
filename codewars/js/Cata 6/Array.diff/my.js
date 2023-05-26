function array_diff(a, b) {
	for (var i=0; i<b.length; i++){
		var idx = a.indexOf(b[0]);
		while (a.indexOf(b[i]) != -1) {
			a.splice(a.indexOf(b[i]), 1);
		}
	}  
	return a;
}