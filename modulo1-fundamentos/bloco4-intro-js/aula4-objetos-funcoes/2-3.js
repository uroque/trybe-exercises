// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

function greaterPosition(arr) {
  let lesser = 0;

  for (let index in arr) {
    if (arr[index] < arr[lesser]) {
      lesser = index;
    }
  }
  return lesser;
}

let array1 = [2, 4, 6, 7, 10, 0, -3];

console.log(greaterPosition(array1));