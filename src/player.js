import Gameboard from './gameboard';

export default class Player {
	constructor(name) {
		this.name = name;
		this.board = Gameboard;
	}

	sendAttack(opponent, y, x, ships) {
		opponent.receiveAttack(y, x, ships);
	}
}
