'use strict';

var sentence='togethere';
//'shouldwestartclassnoworshouldwewaitforeveryonetogethere';
//'weshouldstart';
var arr = ['we','should','start','a', 'purple', 'pig', 'and', 'a', 'green', 
'donkey', 'flew', 'a', 'kite', 'in', 'them', 'id', 'of', 'the', 
'night', 'and', 'ended', 'up', 'sunburnt',
'should', 'we', 'start', 'class', 'now', 'or', 'should', 'we', 'wait', 'for', 'everyone', 'together', 
'a', 'purple', 'pig', 'and', 'a', 'green', 'donkey', 'flew', 'a', 'kite', 'in', 'them', 'id',  
'of', 'the', 'night', 'and', 'ended', 'up', 'sunburnt','together'
];

let VALID_WORDS = new Set(arr);

var arr = sentence.split('');
var str = "";
var res = [];
for (var i=0; i<arr.length; i++){
  str=sentence.slice(i,i+10);
  //for (var j=0; j<10; j++){
    while (i<arr.length){
    if (VALID_WORDS.has(str)) {
      res.push(str);
      i+=str.length-1;
      str="";
      break;
    } else {
      
      if (str.length == 1){
        res.push(str);
        break;
      };
      str = str.slice(0,str.length-1);
    };//if
  }; //for j or while
//str="";
};//for i
console.log(res);


alert(VALID_WORDS.has("we"));