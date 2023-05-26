var arr=["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0];



for (var i=0; i<arr.length; i++){
	
	if (arr[i]==0){
      arr.splice(i,1);
      arr.push(0);
    }

  };

//  alert(arr.length);
//  alert("the end");
  alert(arr);

