const spaceship = { type: 'shuttle' };

// spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable. ERROR !!!

spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
spaceship.mission = 'New Zealand lol'; // Creates another key of 'mission' with a value of 'New Zealand lol'

console.log(spaceship.type);
console.log(spaceship);

delete spaceship.mission; // Removes the mission property

console.log(spaceship);
