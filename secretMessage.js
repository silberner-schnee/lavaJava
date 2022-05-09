let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//test length of secretMessage
//console.log(secretMessage.length);
//method .pop to remove last string from secretMessage array
secretMessage.pop();
//see length of secretMessage array with .length
console.log(secretMessage.length);

//use .push method to add to end of array
secretMessage.push('to', 'Program');
//check .push -- correct
//console.log(secretMessage);

//check index of 'easily'
//console.log(secretMessage.indexOf('easily'));

//change 'easily' to 'right' 
secretMessage[7] = 'right';

//remove first string of array with shift method
secretMessage.shift();

//use unshift method to add 'Programming to beginning of array
secretMessage.unshift('Programming');
//test if it worked. -- success
//console.log(secretMessage);

//use splice method to remove and replace 'get, right, the, first, time' with 'know'
//splice (first digit determines start place in array, second is number of words to replace) -> (6,5)
//after that, name the replacements (6,5, 'mozzerella','tyres')  etc. 
secretMessage.splice(6,5, 'know');
//console.log(secretMessage);

//use .join method to print array to a sentence
//join with spaces
console.log(secretMessage.join(' '));







