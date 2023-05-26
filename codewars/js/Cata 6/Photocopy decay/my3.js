function generationLoss(orig, copy) {
    let avable = ["#","+",":","."," "];
    let y = 0;
    console.log(orig);
    console.log("==>");
    console.log( copy);
    //console.log(orig.length +"==>" + copy.length);
    
    if (orig.length < copy.length) return false;
    for (let i=0; i<orig.length; i++){
    	
       if (orig[i] >="a" && orig[i] <= "Z"){
        avable.push(orig[i].toLowerCase());
        avable.push(orig[i].toUpperCase());
        
       };
              
       let pos = avable.indexOf(copy[i]);
       let pos2 = avable.indexOf(orig[i]);
       
       
       if ( (pos != -1) || (pos2 <= pos) ) y++; 
       if ( (avable.length == 5) && (orig[i] != copy[i])) console.log("opanki");
       
       console.log(pos, pos2, y, orig[i], copy[i]);
       console.log(avable);
       
       
       
       if (orig[i] >="A" && orig[i] <="Z"){
	       avable.pop();
	       avable.pop();
	   };
    };
    if (y==orig.length) return true;
    return false
}