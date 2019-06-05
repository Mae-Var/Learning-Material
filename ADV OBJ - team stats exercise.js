// getters => access properties of an object
// setters => change / mutate properties of an object

// getter:
// set fullName(value) {
//     const parts = value.split('');
//     this.firstName = parts[0];
//     this.lastName = parts[1];

const team = {
  _players: [
    {
      firstName: 'Bobi',
      lastName: 'Pope',
      age: 32
    },
    {
      firstName: 'Danneh',
      lastName: 'Hristozopova',
      age: 26
    },
    {
      firstName: 'Tikky',
      lastName: 'Pope',
      age: 1
    }
  ],
  _games: [
    {
      opponent: 'Uglyface',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Fudgeface',
      teamPoints: 12,
      opponentPoints: 42
    },
    {
      opponent: 'Mugshot Jack',
      teamPoints: 30,
      opponentPoints: 17
    }
  ],
  get player() {
    return this._players;
  },
  get games() {
    // for (i = 0; i < this._games.length; i++) {
    //   if (i = this._games.length - 1) {
    //     return this._games[i];
    //   }
    // }
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Alliance', 100, 87);
team.addGame('EG', 73, 36);
team.addGame('NiP', 83, 76);

console.log(team._players);
console.log(team._games);

console.log(team.games);