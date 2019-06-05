class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff; // this is equal to: this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(
  `Surgeon ${surgeonCurry.name}'s remaining vacation days are: ${
    surgeonCurry.remainingVacationDays
  }`
);

console.log(surgeonDurant.name);
console.log(
  `Surgeon ${surgeonDurant.name}'s remaining vacation days are: ${
    surgeonDurant.remainingVacationDays
  }`
);
