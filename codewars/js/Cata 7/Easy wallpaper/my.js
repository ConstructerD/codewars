function wallpaper(l, w, h) {
    let words = [`zero`,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,
    `eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`,`twenty`,
    `many`];
    
    if (h==0 || l==0 || w==0) return words[0];
   
    let res = (l+w)*2*1.15*h/(10*0.52);
    
    
    return words[Math.trunc (res)+1];
}


console.log(wallpaper(6.1, 6.7, 2.81));