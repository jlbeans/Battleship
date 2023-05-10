import Player from './player';
import Computer from './computer';
import Ship from './ship';

test('computer can send hit to enemy gameboard', () => {
	let player = new Player('bob');
	let computer = new Computer('computer');
	let board = player.board;
	let ship = new Ship('destroyer', 3);
	let ships = [ship];

	board.placeShip(ship, 0, 0, 'x');
	expect(computer.computerSendAttack(board, ships)).toBeTruthy();
});
