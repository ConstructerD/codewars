/*
var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
*/
var friends1 = [ 'B1', 'B2' ];
var fTowns1 = [ [ 'B1', 'Y1' ],
  [ 'B2', 'Y2' ],
  [ 'B3', 'Y3' ],
  [ 'B4', 'Y4' ],
  [ 'B5', 'Y5' ] ];
var distTable1 = [ 'Y1', 50, 'Y2', 70, 'Y3', 90, 'Y4', 110, 'Y5', 150 ];
//Expected: 168, instead got: 471


function tour(friends, fTowns, distTable) {

  let town = [];
  for (let i=0; i<friends.length; i++){
    for (let j=0; j<fTowns.length; j++){
      if (friends[i] == fTowns[j][0]) town.push(fTowns[j][1]);
    }
  }

  let d = [];
  for (let i=0; i<town.length; i++){
    for (let j=0; j<distTable.length; j+=2){
      if (town[i] == distTable[j]) d.push(distTable[j+1]);
    }
  }
  let dist = 0;
  
  for (let i=0; i<d.length-1; i++){
    let c = d[i+1];
    let a = d[i];
    dist += Math.sqrt(c*c - a*a);
  }
  dist += d[0] + d[d.length-1];
  return Math.floor(dist);
}

alert(tour(friends1, fTowns1, distTable1));