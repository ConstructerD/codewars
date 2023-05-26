vfunction validParentheses(parens){
  //TODO 
  var sum=0;
  for (var i=0; i<parens.length; i++){
    if (parens[i]==="("){sum++};
    if (parens[i]===")"){sum--};
    if (sum < 0){return false};
  };
  if (sum == 0){return true}
    else {return false};
}