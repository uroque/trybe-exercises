// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

function longerName(arr) {
  let longer = '';
  for (let index in arr) {
    if (arr[index].length > longer.length) {
      longer = arr[index];
    }
  }
  return longer;
}

let array1 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(longerName(array1));

