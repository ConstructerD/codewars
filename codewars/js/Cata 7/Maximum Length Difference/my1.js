function mxdiflg(a1, a2) {
    var min=a1.length;
    var max=0;
    if (a2.length<a1.length) {min=a2.length};
    for (var i=0; i<min; i++){
      if (Math.abs(a1[i].length-a2[i].length)>max) {
        max=Math.abs(a1[i].length-a2[i].length);
      }
    }
    return max
}