// 1-Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 

function isPalindrome(phrase) {
  let phraseReversed = phrase.split('').reverse();
  console.log(phraseReversed)

  if (phrase === phraseReversed) {
    return true;
  } else {
    return false;
  }
}