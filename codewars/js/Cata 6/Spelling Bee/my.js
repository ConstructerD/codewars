let hive = [
      "bee.bee".split(''),
      "e.e.e.e".split(''),
      "eeb.eeb".split('')
    ];
let bees = 0;
for (let i=0; i<hive.length; i++){
	for (let j=0; j<hive[i].length; j++){
		let row = hive[i][j]+hive[i][j+1]+hive[i][j+2];
		if (row == "bee" || row == "eeb") bees++;
		if (i <= hive.length - 3){
			let col = hive[i][j]+hive[i+1][j]+hive[i+2][j];
			if (col == "bee" || col == "eeb") bees++;
		}
	}
}
console.log(hive);
console.log(bees);

/*
Замечательная проверка на null или пустой архив
 if (!hive || !hive.length)  return 0;
|

*/