let input = 'turpentine and turtles.';
const vowels = ["a","e","i","o","u"];
let resultArray = [];
for (i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  if (input[i] === "e" || input [i] === "u") {
    resultArray.push(input[i])
  }
  for (j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      //console.log('letter ' + input[i] + ' matches');
      resultArray.push(input[i]);
    }
    }
}
//console.log(resultArray);
let resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);
