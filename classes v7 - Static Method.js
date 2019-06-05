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

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, ins) {
    super(name);
    this._insurance = ins;
  }
  get ins() {
    return this._insurance;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(`Nurse Olynyk has ${nurseOlynyk.remainingVacationDays} remaining vacation days.`);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

const doctorBoho = new Doctor('Boho', 'Full insurance, trust me!');
doctorBoho.takeVacationDays(7);
console.log(doctorBoho.name);
console.log(doctorBoho.remainingVacationDays);
console.log(doctorBoho.ins);
