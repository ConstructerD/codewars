

const orig ="123? ABC!";//123? ABC!
const copy ="123?    !";//123?    !
            


function generationLoss(orig, copy) {
    let regexp = /[a-zA-Z\s\#\+\:\.]/;
    let avable = ["#","+",":","."," "];
    let y = 0;
    
    console.log(orig);
    console.log("==>");
    console.log( copy);
    /*
    for (let i=0; i<orig.length; i++){
      console.log("orig = "+ orig[i] + "-->" + orig[i].search(regexp));
    };  
*/
    
    //console.log(orig.length +"==>" + copy.length);
    
    if (orig.length < copy.length) return false;
    for (let i=0; i<orig.length; i++){
        
       if (orig[i].search(regexp) == 0){
         if ((orig[i]==" ") || (orig[i]=="#") || (orig[i]=="+") || (orig[i]==":") || (orig[i]==".")) {
              avable.unshift("~");
              avable.unshift("~");
          } else {
              avable.unshift(orig[i].toLowerCase());
              avable.unshift(orig[i].toUpperCase());    
          }
       };
              
       let pos1 = avable.indexOf(orig[i]);
       let pos2 = avable.indexOf(copy[i]);
       
       if ( ((orig[i].search(regexp) == 0) || (orig[i] == copy[i])) && (pos2 >= pos1) ) y++;
       if (orig[i].search(regexp) == -1 && orig[i] != copy[i]) return false;
       //if ( (pos != -1) || (pos2 <= pos) ) y++; 
       //if ( (avable.length == 5) && (orig[i] != copy[i])) console.log("opanki");
       
       console.log(pos1, pos2, y, orig[i], copy[i]);
       console.log(avable);
       
       
       
       if (orig[i].search(regexp) == 0){
           avable.shift();
           avable.shift();
       };
    };
    if (y==orig.length) return true;
    
    return false
}
alert(generationLoss(orig, copy));