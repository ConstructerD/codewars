//GFEDCBA
//------------...-----------
//Value == 'EDCBAGF'

/*
GFEDCBA
------....-.---
Expected: 'AGFEDCB', instead got: 'GFEABCD'


EDCBA
--..---...-..-...----..-----
Expected: 'EDCBA', instead got: 'AEDBC'
*/

let ants =    "GFEDCBA";
let terrain = "------.....------.....---------"; //Expected: 'GFEDCBA', instead got: 'EGBFCDA'

let antBridge = function(ants, terrain) {
  
  let t=terrain.split("");
  
  let plat="";

  function movePlaton (platoon,index){
    let str="";
    for (let i=0; i<index; i++) {
        str+=terrain[i];
    }
    str+=platoon;
    for (let i=index+platoon.length; i<terrain.length; i++) {
        str+=terrain[i];
    }
    return str;
  }

  function moveAnt (platoon, pos1, pos2){
    let p = platoon.split("");
    let ant = p.splice(platoon.length-pos1,1);
    p.splice(platoon.length-pos2,0,ant);
    return p.join("");
  }

  function isBridge (platoon, pos) {
    for (let i = pos; i<pos+platoon.length; i++){
        if (terrain[i]==".") return true;
    }
    return false;
  }
  
plat=ants;
  
let bridgeBegin=0;
let bridgeEnd=0;

	for (let i=0; i < plat.length*2; i++){
	    
	    if ((t[i]=="-") && (t[i+1]==".")) bridgeBegin = i;
	    if ((t[i]==".") && (t[i+1]=="-")) bridgeEnd   = i + 1;
	    
	};
	console.log(bridgeBegin, bridgeEnd);


	for (let i=0; i<terrain.length-plat.length; i++){
	    let z = i + plat.length - 1;
	    if (i > plat.length){
	        if ((t[z]=="-") && (t[z+1]==".")) bridgeBegin = z;
	        if ((t[z]==".") && (t[z+1]=="-")) bridgeEnd   = z + 1;
	    };
	    
	    // идем без моста
	    if (!isBridge(i)) console.log("1");
	    
	    //строим мост
	    if ((z >= bridgeBegin) &&  (z <= bridgeEnd)){
	        
	        plat = moveAnt(plat, z - bridgeBegin + 1, 1);
	        console.log("2; z="+z+" i="+i);
	    }
	    
	    //переходим мост
	    if ((z > bridgeEnd)  && (i <= bridgeBegin)){
	        if (bridgeBegin < bridgeEnd){
	            plat = moveAnt(plat, z - bridgeBegin + 1, z - bridgeEnd);
	            console.log("3; z="+z+" i="+i);
	        } else {
	        	plat = moveAnt(plat, 7, 1);
	        	console.log("5; z="+z+" i="+i);
	        }
	    }

	    // подтягиваем хвост
	    if (i > bridgeBegin && i<= bridgeEnd){
	        plat = moveAnt(plat, plat.length, z - bridgeEnd);
	        console.log("4; z="+z+" i="+i);
	    }
	    console.log(i, movePlaton(plat,i), bridgeBegin, bridgeEnd);
	    
	}
 return plat;
}; //function
alert(antBridge(ants,terrain) + "   -->   " + "GFEDCBA");