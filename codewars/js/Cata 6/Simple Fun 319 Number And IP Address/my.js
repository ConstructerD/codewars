let s = "10.0.3.193";

function numberAndIPaddress(s){
  let str = "";
  let numbers = s.split(".");
 
  if (numbers.length == 1){
      let newB = (numbers[0]*1).toString(2);
      let arr = [];
      for (let i = newB.length; i<32; i++){newB = "0"+ newB;}
      arr[0] = newB.substr(0,8);
      arr[1] = newB.substr(8,8);
      arr[2] = newB.substr(16,8);
      arr[3] = newB.substr(24,8);
      str = "" + parseInt(arr[0],2)+"."
               + parseInt(arr[1],2)+"."
               + parseInt(arr[2],2)+"."
               + parseInt(arr[3],2);
    } else {
      let a = numbers.map(x => {
        let b =(+x).toString(2);
        while (b.length < 8) {b = "0" + b;}
        return b;
      });  
      str = a.reduce((acc, cur) => {return acc+cur;},"");
      str = parseInt(str,2)+"";
    }
  return str;
}
console.log(numberAndIPaddress(s));