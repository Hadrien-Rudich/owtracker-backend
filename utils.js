function anagramBuilder(word) {

  const newWord = []
  for(let i = 1; i < word.length; i++) {
   newWord.push(word.charAt(word.length - i))

}
const finalWord = newWord.join("") + word.charAt(0)
console.log(finalWord)
}

function anagramBuilderTwo(word) {

  newWord = [];
for(letter of word) {
  newWord.push(letter)
  
}
console.log(newWord)
}

function reverseString(str) {
  return str.split("").reverse().join("");
}



function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}


reverseWords(['h','e','l','l','o'])
anagramBuilder("hadrien")
anagramBuilderTwo("hadrien")