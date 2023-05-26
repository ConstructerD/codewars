let ants = "GFEDCBA";
let terrain = "------.....------.....---------"; //Expected: 'GFEDCBA', instead got: 'FEDCBAG'

let antBridge = function(ants, terrain) {
  // Your code here!
  let a=ants.split("");
  let ant;
  let bridge=[];
  for (let i=0; i<terrain.length; i++){
    
	if (terrain[i]=="."){
      if (terrain[i-1]=="-"){
        ant=a.pop();
        bridge.push(ant);
      }
    ant=a.pop();
    bridge.push(ant);
    if (terrain[i+1]=="-"){
        ant=a.pop();
        bridge.push(ant);
        i++;
      }
    }
    if (terrain[i]=="-" && bridge.length>0){
        ant=bridge.shift();
        if (typeof ant != "undefined") a.unshift(ant);
    }
  };
  console.log(a);
  console.log(bridge);
  ants=a.join("");
  return ants;
}
alert(antBridge(ants,terrain));