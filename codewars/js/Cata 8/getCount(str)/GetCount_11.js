function getCount(str) {
  var vowelsCount = 0;
  
  vowels = 'aeiou'
  for (var i=0; i<str.length; i++) {
  if (vowels.indexOf(str[i]) != -1){
  vowelsCount++;
  }
  }
  return vowelsCount;
}