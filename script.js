// function isPangram(sentence) {
//   let alphabet = [];
//   for (let letter of sentence) {
//     let letterToLower = letter.toLowerCase();
//     if (letterToLower !== " " && !alphabet.includes(letterToLower))
//       alphabet.push(letterToLower);
//   }
//   console.log(alphabet);
//   if (alphabet.length === 26) return true;
//   return false;
// }

// function isPangram(sentence) {
//   for (let char of "abcdefghijklmnopqrstuvwxyz")
//     if (sentence.toLowerCase().indexOf(char) === -1) {
//       return false;
//     }
//   return true;
// }

function isPangram(sentence) {
  for (let char of "abcdefghijklmnopqrstuvwxyz")
    if (!sentence.toLowerCase().includes(char)) {
      return false;
    }
  return true;
}

console.log(isPangram("The Five boxing wizards jump quickly"));
console.log(isPangram("The five boxing wizards jump quick"));
