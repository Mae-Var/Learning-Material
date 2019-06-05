// https://www.codecademy.com/courses/introduction-to-javascript/lessons/classes/exercises/inheritance-ii

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

class Doctor {
  constructor(name) {
    this._name = name;
    this._insurance;
  }
}

class Nurse {
  constructor(name) {
    this._name = name;
    this._certifications;
  }
  addCertification(addCert) {
    this._certifications += addCert;
  }
}
