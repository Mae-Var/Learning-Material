/* you can use Switch case with string by using the following 

switch (String(this)) {
    case 
}

*/

/* The below code is OBJECT KEY (possibly ENUM, not sure)

const gameOptions = {
    Rock: 'rock',
    Paper: 'paper',
    Scissors: 'scissors',
  };

*/

/* EXPERIMENTS

const dayWeek = {
    dOne: 'Monday',
    dTwo: 'Tuesday',
    dThr: 'Wednesday',
    dFou: 'Thursday',
    dFiv: 'Friday',
    dSix: 'Saturday',
    dSev: 'Sunday',
};

const getSleepHours = day => {
    let dayW = dayWeek;
   switch (dayW) {
       case 1:
           return 8;
       case 2:
           return 8;
       case 3:
           return 8;
       case 4:
          return 8; 
       case 5:
          return 8;
       case 6:
          return 8;
       case 7:
         return 8;
   }
};

console.log(getSleepHours(dOne));

*/

/*
Constructor | Type

String | string
Boolean | boolean
Number | number
Function | function

*/

let asdf = Number('13');
console.log(asdf);
console.log(typeof asdf);
console.log(asdf.toFixed(2));
console.log(typeof asdf.toFixed(2));
console.log('LiTerAl'.toUpperCase());
console.log('LiTeRal'.toLowerCase());


// wtf :D

let testIs = {

};

testIs.DFGA = 'dfga test1';
testIs.GAF = 'gafchence';

console.log(testIs);
console.log(testIs);
console.log(testIs.DFGA);


// test above

// ALT + SHIFT + F = automatic rearrangement for the code or w/e lel.

// \n is adding a new line to the strings. You can use \n or \r .

function Person(ime) {
    this.name = ime;

    this.introduceSelf = () => {
        return `Hi, glad to meet you! My name is ${this.name}.`;
    };

    this.introduce = otherParam => {
        return `Hi, my name would be ${this.name}. \n${otherParam()}`;
    };
}

Person.prototype.printName = function () {
    console.log(this.name);
};

Person.prototype.greet = function (friend) {
    console.log(`Hello, my name is ${this.name}. How are you today, ${friend.name}?`);
};

let gosho = new Person('Goshinko');
let pesho = new Person('Peshkata, brat');
let stefan = new Person('Stefokal');

gosho.printName();
pesho.printName();
stefan.printName();
stefan.greet(gosho);
stefan.greet({
    name: 'K.Y.P.'
});
console.log(stefan.introduceSelf());
console.log(stefan.introduce(pesho.introduceSelf));

// console.log(typeof gosho);
// console.log(gosho);
// console.log(gosho instanceof Person);