function fib(n) {
  const f = [0n,1n];
  let negative = true;
  n < 0 ? n=Math.abs(n) : negative = false;
  for (let i=2; i<=n; i++){
    f[i] = f[i-2] + f[i-1];
  }

return  (!negative || n%2) ? f[n] : -f[n];
}

function fib1(n) {
  if (n==0) return 0n;
  let negative = true;
  let sum1 = 1n;
  let sum2 = 0n;
  let temp = 0n;
  n < 0 ? n = Math.abs(n) : negative = false;
  for (let i=2; i<=n; i++){
    temp = sum1;
    sum1 += sum2;
    sum2 = temp;
  }

return  (!negative || n%2) ? sum1 : -sum1;
}

function fib2 (n) {
  // не подходит из-за очень маленького применения (101).
  let five = Math.sqrt(5);
  let f1 = ((1+five)/2)**n;
  let f2 = ((1-five)/2)**n;
  return Math.round((f1-f2)/five);
}

/**
 * Вариант 6 (небольшое развитие матричного)
F_{2n+1} = F_n^2 + F_{n+1}^2
F_{2n} = F_n (2F_{n+1} — F_n)
 */



function fib4(n) {
  const f = [0n,1n];
  let negative = true;
  n < 0 ? n=Math.abs(n) : negative = false;
  let x = 0;
  n%2 ? x=((n-1)/2)+1 : x=(n/2)+1;
  console.log(`n=${n} and divided on ${x} and ${x-1}`);
  for (let i=2; i<=15; i++){
    f[i] = f[i-2] + f[i-1];
  }
let res = 1n;
//n%2 ? res = f[x-1]**2n + f[x]**2n : res = (f[x-1])* (2n*(f[x])-f[x-1]);

return  (!negative || n%2) ? res : -res;
}


//console.log(fib2(50));

console.log(fib4(68996), fib(34497));
console.log(fib4(68995), fib(10));
//console.log(fib1(5), fib(5));
//console.log(fib1(6), fib(6));
//console.log(fib1(-6), fib(-6));
//console.log(fib1(-7), fib(-7));

//1383640


/**
 * using System;
using System.Diagnostics;
using System.Numerics;
 
namespace ConsoleApplication1
{
    class Program
    {
        public static BigInteger Fib(BigInteger n)
        {
            if (n < 0)
                throw new ArgumentException("The fibo value cannot be negative");
            if (n <= 1) 
                return n;
 
            BigInteger[,] result = { { 1, 0 }, { 0, 1 } };
            BigInteger[,] fiboM = { { 1, 1 }, { 1, 0 } };
 
            while (n > 0)
            {
                if (n%2 == 1)
                    Mult2x2Matrix(result, fiboM);
                n /= 2;
                Mult2x2Matrix(fiboM, fiboM);
            }
 
            return result[1,0];
        }
 
        private static void Mult2x2Matrix(BigInteger[,] m, BigInteger[,] n)
        {
            BigInteger a = m[0,0] * n[0,0] + m[0,1] * n[1,0];
            BigInteger b = m[0,0] * n[0,1] + m[0,1] * n[1,1];
            BigInteger c = m[1,0] * n[0,0] + m[1,1] * n[0,1];
            BigInteger d = m[1,0] * n[0,1] + m[1,1] * n[1,1];

            const multMatix = (matrix1, m, matrix2, n) => {
              let a = 
            }
            m[0,0] = a;
            m[0,1] = b;
            m[1,0] = c;
            m[1,1] = d;
        }
 
        static void Main(string[] args)
        {
            var sw = Stopwatch.StartNew();
            var bigInteger = Fib(65536);
            sw.Stop();
            Console.WriteLine("Elapsed milliseconds = {0}, number length = {1} digits", sw.ElapsedMilliseconds, bigInteger.ToString().Length);
        }
    } 
}
 */


let A = [[1n,1n],
        [1n,0n]];
let B = [[1n,1n],
        [1n,0n]];        

function MultiplyMatrix(A,B) {
  /*
  let rowsA = A.length;
  let colsA = A[0].length;
  let rowsB = B.length;
  let colsB = B[0].length;
  */
  let C = [];
  //if (colsA != rowsB) return false;
  for (let i = 0; i < 2; i++) C[ i ] = [];
  for (let k = 0; k < 2; k++) { 
    for (let i = 0; i < 2; i++) { 
      let t = 0n;
      for (let j = 0; j < 2; j++) t += A[ i ][j]*B[j][k];
      C[ i ][k] = t;
    }
  }
return C;
}

function MatrixPow(n,A) { 
  if (n == 1) {return A;}     // Функцию MultiplyMatrix см. выше
  else {return MultiplyMatrix( A, MatrixPow(n-1,A) )};
}

let bb = [];
for (let i=0; i<1; i++) {
  B = MultiplyMatrix(A,B);  
  //console.log(B);
}
//MultiplyMatrix(A,B);
console.log(B[1][1]);
//console.log(MatrixPow(15,A));