str='Earn extra honor and gain new allies! Honor is earned for each new codewarrior who joins';

function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length:0;
}
var t=getCount(str);
console.log(t);
console.log(vowelsCount);

// Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.