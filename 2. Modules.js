// For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order.
// We would create a separate file order.js and import the Menu module from menu.js to order.js using require():
// In order.js we would write:

const air1 = require('./1. Modules.js');

function planeModel() {
  console.log('My plane model is: ' + air1.myAirplane);
}

planeModel();
