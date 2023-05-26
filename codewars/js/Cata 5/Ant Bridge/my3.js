//GFEDCBA
//------------...-----------
//Value == 'EDCBAGF'

let ants =    "GFEDCBA";
let terrain = "------------...-----------"; //Expected: 'GFEDCBA', instead got: 'FEDCBAG'

let antBridge = function(ants, terrain) {
  // Your code here!
  let a=ants.split("");
  let t=terrain.split("");
  let walk = [];
  let platoon=a.length;
  let gap=false;
  let bridge=0;
  //create a walking
  for (let i=0; i<platoon; ++i){
    walk[i]=a[i];
  }
  
  for (let i=platoon; i<t.length; i++){
    walk[i]=(t[i]);
  }
  

  for (let i=0; i<t.length; i++){
    //looking for the gap
    for (let j=i; j<i+platoon+1; j++){
      if (t[j] == ".") {
          gap = true;
          bridge = j-1;
          break;
      }
    } // for J
    
    //build the bridge
    if ( (i > bridge-platoon) && (i < bridge) ){
        for (let j=0; j<platoon-1; j++){
            walk[bridge+j+1]=walk[bridge-1];//переместили на яму или за яму
            let k;
            for (k=bridge-1; k>bridge-platoon+1; k--){ //подтягиваем хвост
                walk[k]=walk[k-1];
            }
            walk[i]=t[i];
            console.log(i, walk.join(""));
            i++;
        }
    }

    if (gap){
        for (let j=0; j<platoon; j++){
            let k;
            for (k=0; k<j; k++){
                 let p=bridge+platoon+j-k
                 walk[p]=walk[p-1];
            }
            walk[bridge+platoon]=walk[bridge+j];//переместили муравья перед мостом за мост
            walk[i]=t[i];
            console.log(i, walk.join(""));
            i++;
        }
        i--;
    } else {
        for (let j=0; j<platoon+1; j++){
            walk[i+platoon-j]=walk[i+platoon-j-1];
        }
        walk[i]=t[i];
    } //if
    gap=false;
  console.log(walk.join(""));  
  }//for I
  
  ants=walk.splice(-platoon).join("");
  return ants;
} //function
alert(antBridge(ants,terrain) + "   -->   " + "GFEDCBA");