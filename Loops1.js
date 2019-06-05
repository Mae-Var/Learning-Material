// Write your code below

/* Tedious way of making huge list-Array: 

const vacationSpots = ['San Francisco', 'The Maldives', 'Prague'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
*/

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
} // loop counter showing results from 5 through 10, incl.


// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counterZ = 3; counterZ >= 0; counterZ--) {
    if (counterZ > 0) {
        console.log('It goes: ' + counterZ);
    } else {
        console.log('And it ends with: ' + counterZ);
    }
}
// New code below: 

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}

// New code below: 

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j]);
        }
    }
}