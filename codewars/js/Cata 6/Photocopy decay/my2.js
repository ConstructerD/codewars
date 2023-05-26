function generationLoss(orig, copy) {
    let regexp=/[A-Z]/gi;
    let avable = ["#","+",":","."," "];
    let y=0;
    console.log(orig +"==>" + copy);
    console.log(orig.length +"==>" + copy.length);
    if (orig.length < copy.length) return false;
    for (let i=0; i<orig.length;i++){
       if (orig.search(regexp) != -1 ){
        avable.push(orig[i].toLowerCase());
        avable.push(orig[i].toUpperCase());
       };
              
       let pos = avable.indexOf(copy[i]);
       let pos2 = avable.indexOf(orig[i]);
       //console.log(orig[i] + " --> "+ copy[i] + " --> " + pos);
       if (pos!= -1 || pos2 == pos) y++;
       console.log(pos, pos2);
       console.log(avable);
       console.log(orig.search(regexp));
       avable.pop();
       avable.pop();
    };
    if (y==orig.length) return true;
    return false
}