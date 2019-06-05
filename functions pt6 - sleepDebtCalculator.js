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

let testIS = {

};

testIS.DFGA = 'dfga test1';
testIS.GAF = 'gafchence';

console.log(testIS);
console.log(testIS);
console.log(testIS.DFGA);


function test(input) {
 this.input = input;
}

test.prototype.logInput = function() {
 console.log(this.input);
};

let faceRoll = new test('Nqkv string');

faceRoll.logInput();
console.log(typeof faceRoll);
console.log(faceRoll);
