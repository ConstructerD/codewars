/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";
let len = 25;

let justify = function(str, len) {
  let arr = str.split(" ");
  let arStr = [];
  let res = "";
  //create array of string with rigth lenght
  while ( arr.length > 0 ){
    let temp = "";
    let i = 0;
    while ( temp.length <= len-1 ) {
      let a = temp.length;
      if ( typeof arr[ i ] == "undefined" ) arr[ i ]="";
      let s = "" + arr[ i ]; 
      let b = s.length;
      if ( (a + b) <= len ){
         temp += arr[ i ] + " ";
         i++;
      } else {
         break; 
      } 
    }
    while ( temp[ temp.length-1 ] == " " ) temp = temp.slice( 0, -1 );
    arStr.push( temp );
    while ( i ) {
      arr.splice( 0, 1 );
      i--;
    }
    console.log(temp, temp.length);
  }
  
  //add some spaces between the words
  console.log(arStr);
  console.log(arr);
  
  for (let i = 0; i < arStr.length-1; i++){
    let temp = arStr[i];
    let pos = -1;
    let arPos = [];
    while ( (pos = temp.indexOf(" ", pos + 1) ) != -1) {
      arPos.push(pos);
    }
    if ( typeof arPos[0] != "undefined" ){
        let end = 0, j = 0;
        while ( temp.length < len ){
          end = arPos[ j ];
          temp = temp.slice( 0, end ) + " " + temp.slice( end );
          j++;
          for (let k = j; k < arPos.length; k++) 
            if ( typeof arPos[ k ] != "undefined" ) arPos[ k ]++;
          if ( j >= arPos.length ) j = 0;  
    
        }
    }
    while ( temp[ temp.length-1 ] == " " ) temp = temp.slice( 0, -1 );
    res += temp + "\n";

    console.log(arStr[i], arPos, temp, temp.length);
  }
  res += arStr[arStr.length-1];
  return res;
};

alert (justify(str, len));