let balls = 
[ { type: 'black', distance: [ 86, 6 ] },
  { type: 'black', distance: [ 88, -9 ] },
  { type: 'red', distance: [ 88, 1 ] },
  { type: 'red', distance: [ 67, 0 ] },
  { type: 'red', distance: [ 55, -6 ] },
  { type: 'red', distance: [ 75, -4 ] },
  { type: 'red', distance: [ 62, 8 ] },
  { type: 'black', distance: [ 69, 3 ] },
  { type: 'red', distance: [ 84, 0 ] },
  { type: 'red', distance: [ 54, 7 ] },
  { type: 'red', distance: [ 74, -4 ] },
  { type: 'red', distance: [ 61, -8 ] },
  { type: 'red', distance: [ 86, 3 ] },
  { type: 'black', distance: [ 51, 8 ] },
  { type: 'red', distance: [ 78, -2 ] },
  { type: 'red', distance: [ 86, -2 ] },
  { type: 'black', distance: [ 65, 0 ] },
  { type: 'black', distance: [ 90, 10 ] },
  { type: 'jack', distance: [ 80, 1 ] } ];
/*
[ { type: 'black', distance: [ 75, 2 ] },
{ type: 'black', distance: [ 82, 4 ] },
{ type: 'black', distance: [ 83, -3 ] },
{ type: 'black', distance: [ 81, 6 ] },
{ type: 'red', distance: [ 72, 3 ] },
{ type: 'red', distance: [ 81, 2 ] },
{ type: 'red', distance: [ 80, -2 ] },
{ type: 'red', distance: [ 85, -1 ] },
{ type: 'jack', distance: [ 80, -5 ] } ];
*/
function bocceScore(balls) {
  console.log(balls);
  const dist = (a,b) => Math.sqrt(a*a+b*b);
  let blackBalls = [];
  let redBalls = [];
  const jackPoint = balls.pop();
  
  let news = balls.map( (a) => {
    
    if (a.type == "black") {
      let cat1 = Math.abs( jackPoint.distance[0]-a.distance[0]);
      let cat2 = Math.abs( jackPoint.distance[1]-a.distance[1]);
      let hyp = dist (cat1, cat2);
      blackBalls.push(hyp);
      return hyp;
    }
    if (a.type == "red") {
      let cat1 = Math.abs( jackPoint.distance[0]-a.distance[0]);
      let cat2 = Math.abs( jackPoint.distance[1]-a.distance[1]);
      let hyp = dist (cat1, cat2);
      redBalls.push(hyp);
      return hyp;
    }
  });


  redBalls.sort((a,b) => a-b);
  blackBalls.sort((a,b) => a-b);

  if (redBalls[0] == blackBalls[0]) return 'No points scored';

  let score = 0;
  
  
  
  if (blackBalls[0] < redBalls[0]) {
    score++;
    for (let i = 1; i < blackBalls.length; i++) {
      if (blackBalls[i] < redBalls[0]) score++;
    } 
  } else {
    score--;
    for (let i = 1; i < redBalls.length; i++){
      if (redBalls[i] < blackBalls[0]) score--;
    }  
  }
  

  if (score == 0) return 'No points scored';
  if (score > 0) {
    return 'black scores '+ Math.abs(score);
  } else {
    return 'red scores '+ Math.abs(score);
  }
}



  

console.log(bocceScore(balls));