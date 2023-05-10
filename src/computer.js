import Player from './player';

export default class Computer extends Player {
	constructor(name, board) {
		super(name);
		super(board);
	}

	computerSendAttack(opponent, ships) {
		const y = Math.floor(Math.random() * 10);
		const x = Math.floor(Math.random() * 10);

		const valid = opponent.validMove(y, x);
		if (valid === true) {
			this.sendAttack(opponent, y, x, ships);
		} else {
			console.log('already guessed these coordinates');
			this.computerSendAttack(opponent, y, x, ships);
		}
	}
}
