import Gameboard from './gameboard';
import Ship from './ship';

test('places ship at specific coordinates', () => {
	let ship = new Ship('destroyer', 3);
	let y = 0;
	let x = 0;
	expect(Gameboard.placeShip(ship, y, x, 'x')).toEqual([
		['destroyer', 'destroyer', 'destroyer', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
	]);
});

test('sends hit function to ship if attack coordinates match ship coordinates', () => {
	let ship = new Ship('destroyer', 3);
	let ships = [ship];
	let a = 0;
	let b = 0;
	Gameboard.placeShip(ship, a, b, 'x');
	expect(Gameboard.receiveAttack(a, b, ships)).toStrictEqual({ y: a, x: b });
	expect(ship.hits).toEqual(1);
});

test('returns coordinates as miss if attack coordinates do not match ship coordinates', () => {
	let ship = new Ship('destroyer', 3);
	let ships = [ship];
	let a = 0;
	let b = 0;
	let c = 2;
	let d = 3;
	Gameboard.placeShip(ship, a, b, 'x');
	expect(Gameboard.receiveAttack(c, d, ships)).toStrictEqual({ y: c, x: d });
	expect(ship.hits).toEqual(0);
});

test('game is over when all ships are sunk', () => {
	let ship1 = new Ship('destroyer', 3);
	let ship2 = new Ship('patrol', 2);
	let ships = [ship1, ship2];
	ship1.hits = 3;
	ship2.hits = 2;
	expect(Gameboard.gameOver(ships)).toBe(true);
});
