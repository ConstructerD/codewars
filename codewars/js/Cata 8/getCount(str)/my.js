function getCount(str) {
  var vowelsCount = 0;
  var vowel='a';
  var pos = -1;
	while ((pos = str.indexOf(vowel, pos + 1)) != -1) {
    vowelsCount++;
   }
	vowel='e';
  while ((pos = str.indexOf(vowel, pos + 1)) != -1) {
    vowelsCount++;
  }
  vowel='i';
  while ((pos = str.indexOf(vowel, pos + 1)) != -1) {
    vowelsCount++;
  }
  vowel='o';
  while ((pos = str.indexOf(vowel, pos + 1)) != -1) {
    vowelsCount++;
  }
  vowel='u';
  while ((pos = str.indexOf(vowel, pos + 1)) != -1) {
    vowelsCount++;
  }
 return vowelsCount;}