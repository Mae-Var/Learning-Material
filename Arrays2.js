let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments = ['mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// New code below:

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon']; // finding the length
console.log(objectives.length);

// New code below: 

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('pet Tikky', 'clean Tikky\'s toilet');
console.log(chores);

chores.pop();
console.log(chores);

// New code below - VERY IMPORTANT !!!

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed1 = chores1.pop();
console.log(chores1);
console.log(removed1);