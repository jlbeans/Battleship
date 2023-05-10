import Player from './player';
import Ship from './ship';

test('player can send hit to enemy gameboard', () => {
	let player1 = new Player('bob');
	let player2 = new Player('sam');
	let board = player2.board;
	let ship = new Ship('destroyer', 3);
	let ships = [ship];
	let y = 0;
	let x = 0;
	board.placeShip(ship, y, x, 'x');
	player1.sendAttack(board, y, x, ships);
	expect(ship.hits).toEqual(1);
});
