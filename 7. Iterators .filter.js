const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});

const longFavoriteWords = favoriteWords.filter(words => {
  return words.length > 7;
});

console.log(randomNumbers);
console.log(smallNumbers);
console.log(favoriteWords);
console.log(longFavoriteWords);
