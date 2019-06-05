let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
    }
  },
  engine: {
    model: 'Nimbus2000'
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD'
    },
    backup: {
      battery: 'Lithium',
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = [
  { animal: 'miniature giant space hamster' },
  { ranger: 'Minsc', classDND: 'Ranger' } // Как мога да вкарам Obj в подкатегории, вместо в Масив, но без да се налага да ги вкарвам една след други т.е. отделно да извиквам целия път (ключове)?
];

let firstPassenger = spaceship.passengers[0];

console.log(firstPassenger);
console.log(capFave);
