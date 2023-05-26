function getCount(str) {
  return str.replace(/[^aeiou]/ig, "" ).length
}