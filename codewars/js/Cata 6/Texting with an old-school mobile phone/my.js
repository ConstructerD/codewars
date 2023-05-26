const sendMessage = message => {
  console.log(message);
  const arr1 = [[` `],
    [`.`,`,`,`?`,`!`],
    [`a`,`b`,`c`],
    [`d`,`e`,`f`],
    [`g`,`h`,`i`],
    [`j`,`k`,`l`],
    [`m`,`n`,`o`],
    [`p`,`q`,`r`,`s`],
    [`t`,`u`,`v`],
    [`w`,`x`,`y`,`z`],
    [`'`,`-`,`+`,`=`]];

  let upperCase = false;/* /[A-Z]/.test(message[0]);*/
  let prev = ' ';

  const convert = letter => {
    for (let i=0; i<arr1.length; i++){
      const pos = arr1[i].indexOf(letter);
      if (pos!=-1){
        let res = ``+i;
        if (res == `10`) res = `*`;
        return res.repeat(pos+1);
      }
    }
  }  
  

  let arr2 = message.split(``)
    .map((x) => {
      let str = convert(x)+"";
      if (/[A-Z]/.test(x) ) {
        //console.log(`big letter ${x}`);
        
        if (upperCase == false)  {
          str = '#' + convert(x.toLowerCase());
        } else {
          str = convert(x.toLowerCase());
        }
        upperCase = true;
      };
      if (/[0-9*#]/.test(x)) {
        //console.log(`number ${x}`);
        str = x + '-';
      };
      if (/[a-z]/.test(x) && upperCase){ 
        str = '#' + str;
        upperCase = false;
      };
      
     if (prev[prev.length-1] == str[str.length-1] 
        && str[0] != '#' 
        && prev[prev.length-1] != '-') {
          str = ' '+str;
        } else if (prev[prev.length-1] == str[0]){str = ' '+str; };
      
      console.log(x, str, prev[prev.length-1], str[str.length-1]);
      prev = str;
      
      return str;
    })

    let res = arr2.join('');
    return res;

}

//console.log(sendMessage("hey"));            //4433999
//console.log(sendMessage("one Two three"));  //666 6633089666084477733 33
console.log(sendMessage("Hello World!"));   //"#44#33555 5556660#9#66677755531111
//console.log(sendMessage("Def Con 1!"));   //#3#33 3330#222#666 6601-1111
//console.log(sendMessage("A-z"));          //#2**#9999
console.log(sendMessage("a2D3"));         //2 2-#3 3-