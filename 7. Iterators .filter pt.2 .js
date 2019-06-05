const animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant'
];

const foundAnimal = animals.findIndex(animalE => {
  return animalE === 'elephant';
});

const startsWithS = animals.findIndex(startS => {
  return startS[0] === 's';
});

console.log(foundAnimal);
console.log(startsWithS);
