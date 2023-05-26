var m=[
  ' xxxx |xx  xx|xx  xx|xx  xx|xx  xx| xxxx ',
  '  xx  | xxx  |x xx  |  xx  |  xx  |xxxxxx',
  ' xxxx |xx  xx|   xx |  xx  | xx   |xxxxxx',
  ' xxxx |xx  xx|   xx |   xx |xx  xx| xxxx ',
  'xx  xx|xx  xx|xx  xx| xxxxx|    xx|    xx',
  'xxxxxx|xx    |xxxxx |    xx|    xx|xxxxx ',
  '   xx |  xx  | xxxx |xx  xx|xx  xx| xxxx ',
  'xxxxxx|xx  xx|   xx |  xx  | xx   | xx   ',
  ' xxxx |xx  xx| xxxx | xxxx |xx  xx| xxxx ',
  ' xxxx |xx  xx|xx  xx| xxxx |  xx  | xx   ',
].map(r=>r.split('|'));

function printNumber(n, c) {
  return ['x'.repeat(40),'x'+' '.repeat(38)+'x',...[...Array(6)].map((_,j)=>'x  '+[...n.toString().padStart(5,'0')].map(d=>m[d][j]).join(' ')+'  x'),'x'+' '.repeat(38)+'x','x'.repeat(40)].join('\n').replace(/x/g,c);
}