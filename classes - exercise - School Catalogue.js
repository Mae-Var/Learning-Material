class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newValue) {
    // if (typeof newValue === Number) {
    //   this._numberOfStudents = newValue;
    // }
    if (newValue.isNaN()) {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = newValue;
    }
  }
  quickFacts() {
    return console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${
        this.level
      } school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const random = Math.floor(Math.random() * substituteTeachers.length - 1);
    return console.log(substituteTeachers[random]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents); // passing value 'Primary' to the Parent Class.
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli'
]);

const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
]);

alSmith.sportsTeams;
