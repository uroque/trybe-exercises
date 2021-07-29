// Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = 0;

for (let num of numbers) {
  if (greater < num) {
    greater = num;
  }
}

console.log(greater);