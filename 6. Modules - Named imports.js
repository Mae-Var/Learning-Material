// To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

// import { ... } from './folder/file.name'

import {
  availableAirplanes,
  flightRequirements,
  meetsStaffRequirements
} from './5. Named exports';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log(
      'Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity
    );
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(
      element.name +
        ' meets staff requirements: ' +
        meetsStaffRequirements(
          element.availableStaff,
          flightRequirements.requiredStaff
        )
    );
  });
}

displayFuelCapacity();
displayStaffStatus();
