// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. 

function summation(n) {
  let sum = 0;
  for (let number = 1; number <= n; number += 1) {
    sum += number;
  }
  return sum;
}

console.log(summation(5));