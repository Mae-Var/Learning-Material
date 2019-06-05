let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

function removeLast(remL) {
    remL.pop();
}
function addNew(aNew) {
    aNew.push('to');
    aNew.push('Program');
}
removeLast(secretMessage);
addNew(secretMessage);

secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know'); // .splice() works as "start from 6th index position (including) and remove 5 elements". If you add something afte that ('know' in this case), it will replace the 5 elements with the string 'know'.

/*
console.log(secretMessage.length);
console.log(secretMessage);
*/
console.log(secretMessage.join(' '));