import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './7.2 Export Named exports - updating Airplane.js';

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

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(
      element.name +
        ' meets speed range requirements: ' +
        meetsSpeedRangeRequirements(
          element.maxSpeed,
          element.minSpeed,
          flightRequirements.requiredSpeedRange
        )
    );
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
