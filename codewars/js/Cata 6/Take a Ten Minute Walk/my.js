function isValidWalk(walk) {
  if (walk.length != 10) return false;
  let arr = [0,0,0,0];
  for (let i=0; i<walk.length; i++){
    if (walk[i] == 'n') arr[0]++;
    if (walk[i] == 's') arr[1]++;
    if (walk[i] == 'w') arr[2]++;
    if (walk[i] == 'e') arr[3]++;
  }
  if (arr[0]==arr[1]&&arr[2]==arr[3]) return true;
  return false;
}