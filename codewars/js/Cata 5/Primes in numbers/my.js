function primeFactors(n){
  
    //Sieve of Eratosthenes
    let countPrime = 1000000;
    let isPrime = Array(countPrime);
    for (let i = 0; i < isPrime.length; isPrime[i++] = true);
      for (let i=2; i*i < countPrime; i++){
        if (isPrime[i]){
          for (let j=i*i; j < countPrime; j+=i){
            isPrime[j]=false;
          }
        }
      };

   // Do array of prime number
   let prime=[];
   for (let i=2; i<countPrime; i++){
    if (isPrime[i]==1){prime.push(i)}
  };
    prime.push(5113051); //it's a very huge number


    //looking for factors
    let factor = [];
    let str = "";

    while (n>1){
      for (let i=0; i<prime.length; i++){
        if (n % prime[i] == 0){
          n /=  prime [i];
          factor.push(prime[i]);
          i=prime.length;
        };
        if (i==prime.length-1) n=1;
      };
    };
    let fact = new Set();
    let grade = [];
    let fact2 = [];
    
    //sort factors and degrees
    for (let i=0; i<factor.length; i++) fact.add(factor[i]);    
      fact.forEach((v,v1,fact) =>{
        let sum = 0;
        for (let i=0; i<factor.length; i++){
          if (v==factor[i]) sum++;
        };
        grade.push(sum);
        fact2.push(v);
      });  
    
    
    //create output
    for (let i=0; i<fact2.length; i++){
      str+="(";
      if (grade[i] == 1) {
        str+=fact2[i]+")";
      } else {
        str+=fact2[i]+"**"+grade[i]+")";
      }
    };
    
    return str;
  };    