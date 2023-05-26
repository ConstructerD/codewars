let angleATron = 137.5,
    leafNo = 5;

function prediction(angleATron, leafNo){
    let str = '';
    let obj = {};
    let ang = 0;
    angleATron %= 360;
    for (let i = 0; i < leafNo; i++){
      if (ang > 360) ang -= 360;
      str="leaf " + (i + 1);
      obj[str] = ang.toFixed(1) + " degrees";
      ang += angleATron; 
    }
    return obj;
  }

  console.log(prediction(angleATron, leafNo));

  /**
   * Expected: '
   * { \'leaf 1\': \'0.0 degrees\',\n  \'leaf 2\': \'137.5 degrees\',\n  \'leaf 3\': \'275.0 degrees\',\n  \'leaf 4\': \'52.5 degrees\',\n  \'leaf 5\': \'190.0 degrees\' }', 
   * instead got: 
   * '{ \'leaf 1\': \'0.0\',\n  \'leaf 2\': \'137.5\',\n  \'leaf 3\': \'275.0\',\n  \'leaf 4\': \'52.5\',\n  \'leaf 5\': \'190.0\' }'
   */