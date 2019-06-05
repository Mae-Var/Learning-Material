const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = 0;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


// New code below: 

let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
    cupsOfSugarNeeded = cupsOfSugarNeeded + cupsAdded;
    cupsAdded++;
} while (cupsAdded < 1);
console.log(cupsAdded);

// New code below: 

for (let i = 0; i < rapperArray.length; i++) {
    if (i > 2) {
        break;
    }
    console.log(rapperArray[i]);
};
console.log('And if you don\'t know, now you know.');