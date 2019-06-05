class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  addCertification(addCert) {
    this._certifications = addCert;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

console.log(
  `Nurse ${nurseOlynyk.name} has been certified in ${
    nurseOlynyk._certifications[(0, 0)]
  } & ${nurseOlynyk._certifications[(0, 1)]}.`
);

nurseOlynyk.takeVacationDays(5);
console.log(
  `Nurse ${nurseOlynyk.name} has ${
    nurseOlynyk.remainingVacationDays
  } days remaining vacation.`
);
