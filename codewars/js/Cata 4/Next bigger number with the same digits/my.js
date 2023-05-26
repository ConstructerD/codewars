let n = 1234567890;
//Expected: 1234567908, instead got: 1234567098
function nextBigger(n){
  if (n<10) return -1;
  let arr = n.toString().split('');
  let res = 1;
  console.log(arr);
  let min = 0;
  let nextMin = min;
  for (let i = arr.length; i>0; i--){
    if (arr[i] > arr[i-1]){
      min = arr[i-1]+'';
      nextMin = Math.min(...arr.slice(i))+'';
      break;
    };
    
  };
  let pos1 = arr.lastIndexOf(nextMin);
  if (arr[pos1] == arr[pos1-1]) pos1--;
  let pos2 = arr.lastIndexOf(min);
  if (arr[pos2] == arr[pos2-1]) pos2--;
  arr.splice(pos1, 1);
  arr.splice(pos2, 1, nextMin);
  arr.splice(pos1, 0, min);
  console.log(arr);
  res = arr.join('')*1;
  return res;
}
console.log(nextBigger(n));


/**
 * Идем с конца массива в поисках первого элемента, который будет меньше чем его сосед справа. Если такой не найден — значит, это была последняя перестановка.
 * Находим правее найденного элемента минимальный среди тех, которые больше найденного (такой будет хотя бы 1).
 * Меняем местами элемент, найденный на шаге 1, с элементом, найденным на шаге 2.
 * Разворачиваем все элементы, которые правее позиции, найденной на шаге 1.
 */

 /*
 const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
 */