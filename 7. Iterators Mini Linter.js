let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

let storyWords = story.split(' ');

console.log(
  `The number of words used in your original text is ${storyWords.length},`
);

// let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// filter, ще мине през целия масив и когато има True value, ще запише резултатите в новия масив (betterWords)

let betterWords = [];

for (let i = 0; i < storyWords.length; i++) {
  for (let j = 0; j < unnecessaryWords.length; j++) {
    if (storyWords[i] === unnecessaryWords[j]) {
      storyWords.splice(unnecessaryWords[j], 1);
    }
  }
  betterWords.push(storyWords[i]);
}

console.log(
  `but the amount of words after removing the unnecessary ones is: ${
    betterWords.length
  }`
);

let reallyCnt = 0;
let veryCnt = 0;
let basicallyCnt = 0;
let sentenceCnt = 0;

for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i] === overusedWords[0]) {
    reallyCnt++;
  }
  if (betterWords[i] === overusedWords[1]) {
    veryCnt++;
  }
  if (betterWords[i] === overusedWords[2]) {
    basicallyCnt++;
  }
}
console.log(
  `\n You have used the word ${
    overusedWords[0]
  }: ${reallyCnt} times. \n You have used the word ${
    overusedWords[1]
  }: ${veryCnt} times. \n You have used the word ${
    overusedWords[2]
  }: ${basicallyCnt} times. \n `
);

// for (let i = 0; i < story.length; i++) {
//   if (story[i] === '.' || story[i] === '!') {
//     sentenceCnt++;
//   }
// }

// .length-1 is always the last element in the array.

betterWords.forEach(word => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentenceCnt += 1;
  }
});

console.log(`The number of sentences used in your text is: ${sentenceCnt}\n`);

console.log(betterWords.join(' '));
