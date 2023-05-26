function partlist(arr) {
    let res = arr.map((x,i,ar) => {
      let str1 =``;
      let str2 =``;
      for (let j=0; j<i; j++){ str1 += ar[j]+` `};
      str1 = str1.trim();
      for (let j=i; j<arr.length; j++){ str2 += ar[j]+` `};
      str2 = str2.trim();
      return [str1, str2];
    });
    res.shift();
    return res;
}