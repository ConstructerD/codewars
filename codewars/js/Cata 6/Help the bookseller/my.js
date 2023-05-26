let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B","E"];


function stockList(listOfArt, listOfCat){
  // ... 
  let arr = listOfArt.map(x => {
    let a = x.split(' '); 
    let obj = {};
    obj['letter']=a[0][0];
    obj['count']=a[1];
    return obj;
  });
  let res = listOfCat.map(x => {
    let str = '';
    let acumLetter = arr.filter(lit => lit['letter'] == x);
    if (acumLetter.length == 0)
      {
        str = `(${x} : 0)`;
      } else {
        let sum = 0;
        for (let el in acumLetter){
          sum += +acumLetter[el].count;
        }
        str = `(${x} : ${sum})`
      };
    return str;
  } );
  console.log(res);
  return res.join(' - ');
}

console.log(stockList(b,c));

/**
 * Моя загвоздка заключалась в том, что я создал объект. Можно было напрямую получать данные по книгам по сплита, например так,
 * reduce((a, c) => a + Number(c.split(' ')[1]), 0)   сразу после фильтра, который тоже можно было задать проще, например так,
 * listOfArt.filter(w => v[0] == w[0])
 * 
 * 
 */