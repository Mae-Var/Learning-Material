const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, // he removed the this. from line 37-38
      price: dishPrice
    };
    return this._courses[courseName].push(dish); // return added
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]; // return added
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name} and for dessert you'll get ${desserts.name}. \n The total cost of the above menu will be ${totalPrice} in USD.`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.0);
menu.addDishToCourse('appetizers', 'wings', 4.5);
menu.addDishToCourse('appetizers', 'fries', 3.5);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'salmon', 7.75);
menu.addDishToCourse('mains', 'tofu', 11.2);

menu.addDishToCourse('desserts', 'ice cream', 3.0);
menu.addDishToCourse('desserts', 'coffee', 3.0);
menu.addDishToCourse('desserts', 'cake', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);