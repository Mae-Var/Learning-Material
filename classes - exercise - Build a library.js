class Media {
  constructor(title) {
    this._title = title;
    this._rating = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }
  get rating() {
    return this._rating;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut; // that's REALLY handy!
  }
  getAverageRating() {
    let ratingSum = this._rating.reduce(
      (accumulatedSum, ratingIndex) => accumulatedSum + ratingIndex,
      0
    );
    return (ratingSum / this._rating.length).toFixed(2);
  }
  addRating(rateIt) {
    if (rateIt > 5 && rateIt < 1) {
      return console.log('Please use a valid rating of 1-5!');
    }
    return this._rating.push(rateIt);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

class Catalog extends Media {
  constructor(title) {
    super(title);
    this._newCatalog = [];
  }
  get catalogUpdate() {
    return this._newCatalog;
  }
  updateCatalog(addedTitle) {
    return this._newCatalog.push(addedTitle);
  }
}

const catalogFlex = new Catalog('The Catalog');

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
);
const speed = new Movie('Speed', 'Jan de Bont', 116);

historyOfEverything.toggleCheckOutStatus();
console.log(`History: ${historyOfEverything.isCheckedOut}`);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(
  `Average rating for History book is: ${historyOfEverything.getAverageRating()}`
);

speed.toggleCheckOutStatus();
console.log(`Speed: ${speed.isCheckedOut}`);

catalogFlex.updateCatalog(historyOfEverything.title);
catalogFlex.updateCatalog(speed.title);

console.log(`Your catalog list is: ${catalogFlex.catalogUpdate.join(', ')}.`);
