let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
};

console.log(spaceship);

/* function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
} */

spaceship.color = 'glorious gold';
spaceship.numEngines = Math.floor(Math.random() * (10 - 6 + 1) + 6);

delete spaceship['Secret Mission'];

console.log(spaceship);
