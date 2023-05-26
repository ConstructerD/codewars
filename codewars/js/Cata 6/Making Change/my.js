const makeChange = (amount) => {
  // TODO
  const h = Math.floor(amount/50);
  amount=amount%50;
  const q = Math.floor(amount/25);
  amount=amount%25;
  const d = Math.floor(amount/10);
  amount=amount%10;
  const n = Math.floor(amount/5);
  amount=amount%5;
  const p = amount;
  const solution = {};
  if (h != 0) solution.H = h;
  if (q != 0) solution.Q = q;
  if (d != 0) solution.D = d;
  if (n != 0) solution.N = n;
  if (p != 0) solution.P = p;
  console.log(solution);
  return solution;
 
};
alert(makeChange(91));