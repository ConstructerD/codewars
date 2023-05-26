//let orig= "THE QUICK";
//let copy= "THE AUIcK";

const orig =
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\n"  

const copy =
            "THE QUIcK BRoWN Fo# JUmPs OV#r A LAZY DOG \n"+
            "THE QUIcK #ROwN FOX JUmpS O#eR + ##ZY DOG.\n"+
            "THe +uIcK BroWN #Ox jUmPs OVER a LAZ# Dog \n"+
            "thE qUiCk BR#WN FOX #UMPS OVe# A La#Y dog.\n"+
            "TH# QUICK brOWn FOX JUMpS OVEr A LaZY dog \n"+
            "tHe QuICk BR#WN FOX J#M#+ o##r a lAZY DOg \n"+
            "THe QUiCK bRowN FOX JuMp# OvER A laZY Dog.\n"+
            "THE QUicK B#OWN FOx JuMPS OVER A LAZy DoG.\n"+
            "ThE qUIC# bROwN FO# JUMPS OVEr A LAzY dOG \n"+
            "T#E QuICK bROwN fOX JUmP# oVER A lazy #o#.\n"


function generationLoss(orig, copy) {
    // Your code here
   /* 
    console.log("orig= " + orig)
    console.log(typeof orig +"-->" + orig.length);
    console.log("copy= " + copy);
    console.log(typeof copy +"-->" + copy.length);
    
    if (orig == null || orig == "" || typeof orig == 'undefined') return false;
    if (copy == null || copy == "" || typeof copy == 'undefined') return false;
    */
    let regexp=/[A-Z]/gi;
    let avable = ["#","+",":","."," "];
    
    let poorCharO= 0 , poorCharC=0;
    let arr = orig.match(regexp);
    //console.log("arr="+ arr);
    if (arr == null) return false;
    poorCharO=arr.length;
    let arr1 = copy.match(regexp);
    if (arr1 == null) return false;
    poorCharC = arr1.length;
    //console.log("arr1="+ arr1);
    //console.log(poorCharO);
    //console.log(poorCharC);
    
    function isGood (ch){
        let a = ["#","+",":","."," "];
        a.push(ch.toUpperCase());
        a.push(ch.toLowerCase());

        for (let i=0; i<avable.length; i++){
            if (ch == avable[i]) return true;
        };
        return false; 
    };
    
    if (poorCharO >= poorCharC) {
      let y=0;  
      for (let i=0; i<copy.length; i++){
        /*if ((orig[i] === copy[i]) || (orig[i] === copy[i].toUpperCase()) || (avable.indexOf(orig[i]) >= avable.indexOf(copy[i]))*/
        console.log(orig[i] == copy[i]);
        console.log(orig[i] == copy[i].toUpperCase());
        console.log("orig[i]= " + orig[i] + "      copy[i]= " + copy[i]);
        console.log(avable.indexOf(orig[i]) + " avable.indexOf(orig[i])");
        console.log(avable.indexOf(copy[i]) + " avable.indexOf(copy[i]))");
        y++;

      };
      if (y==orig.length) return true;
    }
    return false
};
alert(generationLoss(orig, copy));