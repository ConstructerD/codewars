function rgb(r, g, b){
  // complete this function  
  function toHex(num) {
    if (num < 0) num = 0;
    if (num > 255) num = 255;
    return ("0" + num.toString(16)).slice(-2).toUpperCase();
  }
  
  return toHex(r)+toHex(g)+toHex(b);
}