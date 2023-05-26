var anagram="pwc";
var dictionary=['xdgsj',
  'ole',
  'oke',
  'pwc',
  'bp',
  'ccj',
  'nxg',
  'kre',
  'wpc',
  'chqlr',

  'wpc' ];


/*
var temp = [];
var dict=dictionary.filter(word => word.length == anagram.length);
console.log("dict=" + dict.length);
//alert(dict);

for (var i=0; i < dict.length; i++ ){
  temp = dict[i].split('');
  for (var j=0; j < anagram.length; j++){
    var pos = temp.indexOf(anagram[j]);
    if (pos != -1) temp.splice(pos, 1);
    //console.log("temp="+temp);
  };
  console.log("temp.length = " + temp.length);
  if (temp.length > 0 ) {
    dict.splice(i, 1);
    i--;
  };
  console.log("temp = "+ temp + " -- dict=" + dict.length);
};
console.log(dict);
*/


/*
anagram = anagram.split('').sort().join('');
dictionary = dictionary.filter(a=>a.split('').sort().join('')===anagram);
alert(anagram + "<>" + dictionary);
*/

/*
function grabscrab (anagram, dictionary) {
  return dictionary.filter(function(word) {
    return word.split('').sort().join('') === anagram.split('').sort().join('');
  });
}
*/

dictionary = dictionary.filter(word => 
  word.split('').sort().join('') == anagram.split('').sort().join(''));

alert( dictionary);