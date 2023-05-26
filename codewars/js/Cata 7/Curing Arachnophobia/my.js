
let legSize=1,
    bodySize=1,
    mouth="W",
    eye="o";

function drawSpider(legSize, bodySize, mouth, eye) {
  var leg=["^","/\\","/╲","╱╲", "^","/\\","╱\\","╱╲"];
  var str="";
  str = leg[legSize-1];
  for (var i=0; i<bodySize; i++){ str+="("};
  for (var i=0; i<(2**(bodySize-1)); i++){ str+=eye};
  str += mouth ;
  for (var i=0; i<(2**(bodySize-1)); i++){ str+=eye};
  for (var i=0; i<bodySize; i++){ str+=")"};
  str += leg[legSize+3];
  
return str;
}

console.log(drawSpider(legSize, bodySize, mouth, eye));
console.log(drawSpider(2, 2, "w", "O"));
console.log(drawSpider(3, 3, "w", "0"));
/**
 * (drawSpider(1, 1, "W", "o"), "^(oWo)^")
 * (drawSpider(2, 2, "w", "O"), "/\\((OOwOO))/\\")
 * (drawSpider(3, 3, "w", "0"), "/╲(((0000w0000)))╱\\"
 * 
 * 
 * Expected: 
 * '/╲(((0000w0000)))╱\\', 
 * instead got: 
 * '/╲(((000w000)))╱\\'
 */