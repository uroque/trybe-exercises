// 2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

function greaterPosition(arr) {
  let greater = 0;

  for (let index in arr) {
    if (arr[index] > arr[greater]) {
      greater = index;
    }
  }
  return greater;
}

array1 = [2, 3, 6, 7, 10, 1];

console.log(greaterPosition(array1));
