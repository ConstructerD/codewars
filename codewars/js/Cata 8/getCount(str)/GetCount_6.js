function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter => {
    return vowels.includes(letter)? true : false;
  }).length;
}