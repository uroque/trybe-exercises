// Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lesser = 10 ** 10;

for (let num of numbers) {
  if (lesser > num) {
    lesser = num;
  }
}

console.log(lesser);