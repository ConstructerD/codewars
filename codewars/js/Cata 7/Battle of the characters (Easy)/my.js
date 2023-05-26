let x = "ONE";
let y = "TWO";

function battle(x, y) {
  let sumX = [...x].reduce( (acc,cur) =>{return acc + cur.charCodeAt()-64},0 );
  let sumY = [...y].reduce( (acc,cur) =>{return acc + cur.charCodeAt()-64},0 );
  if (sumX==sumY) return "Tie!";
  return (sumX > sumY ? x :  y);
}
console.log(battle(x, y));

/*
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});

return spaces + (lineLen++ < len ? ' ' : '');

*/