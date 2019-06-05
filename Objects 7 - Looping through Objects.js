let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      }
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      }
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      }
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      }
    }
  }
};

// Write your code below
for (let crewM in spaceship.crew) {
  console.log(`${crewM}: ${spaceship.crew[crewM].name}`);
}
for (let crewMD in spaceship.crew) {
  console.log(`${spaceship.crew[crewMD].name}: ${spaceship.crew[crewMD].degree}`);
}
