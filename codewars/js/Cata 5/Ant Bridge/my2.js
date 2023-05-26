//GFEDCBA
//------------...-----------
//Value == 'EDCBAGF'

let ants =    "GFEDCBA";
let terrain = "------.....------.....---------"; //Expected: 'GFEDCBA', instead got: 'FEDCBAG'

let antBridge = function(ants, terrain) {
  // Your code here!
  let a=ants.split("");
  let t=terrain.split("");
  //let ant;
  let bridge=[];
  //Проверка состояния на начало. Кто стоит на мосте, а кто на дороге.
  for (let i=0; i<a.length; i++){
    if (t[i]=="-") {
        if (t[i+1]==".") {
            let ant1=a[i];
            bridge.push(ant1);
            let ant2=a[i+1];
            if (typeof ant2 !="undefined") bridge.push(ant2);
            i++;
        }
        if (t[i-1]==".") {
            let ant1=a[i];
            bridge.push(ant1);
        }
    }    
    if (t[i]=="." && t[i-1]!="-") {
        ant=a[i];
        bridge.push(ant);
    }
  };
  //У нас есть массив муравьёв, образующих мост. Их нужно удалить из свободных муравьёв.
  console.log("До удаления a= " + a);
  console.log("bridge= " + bridge);
  for (let i=0; i<bridge.length; i++){
    let pos = a.indexOf(bridge[i]);
    a.splice(pos,1);

  };
  console.log("После удаления a= " + a);
  console.log("bridge= " + bridge);
  
  //А вот теперь пойдем по дорожке, но уже начиная с позиции конца отряда

  for (let i=ants.length; i<t.length; i++){
    if (t[i]=="-"){
        //если мы перед началом моста, то забираем last свободного муравья в last мост
        if (t[i+1]=="."){
            let ant=a.pop();
            bridge.push(ant);
        }
        //если мы на дороге и есть муравьи в мосту, то забираем их по одному
        if (t[i+1]!="." && t[i-1]!="."){
            if (bridge.length>0){
                let ant=bridge.shift();
                if (typeof ant != "undefined") a.unshift(ant);
            }
        }
        //если мы на дороге после моста, то забираем свободного муравья в мост
        if (t[i-1]=="."){
            let ant=a.pop();
            bridge.push(ant);
        }
    }
    if ( (t[i]==".") && ((t[i-1]!="-")||(t[i+1]!="-")) ){
        //забираем свободного муравья в мост
        let ant=a.pop();
        bridge.push(ant);
    }
    //console.log(t[i-1],t[i], t[i+1]);
  }
  ants=a.join("");
  return ants;
}
alert(antBridge(ants,terrain) + "-->" + "GFEDCBA");