// ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

// CODE >>>> import Menu from './menu';
// The import keyword begins the statement.
// The keyword Menu here specifies the name of the variable to store the default export in.
// from specifies where to load the module from.
// './menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.
// We can then continue using the Menu module in the order.js file.

import Airplane from './4.1 Modules ES6';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(
      'Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity
    );
  });
}

displayFuelCapacity();
