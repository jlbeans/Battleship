import Ship from './ship';

test('ship hits increase after hit', () => {
	let ship = new Ship(null, 5);
	expect(ship.hit()).toEqual(1);
});

test('ship sinks when hits equal length', () => {
	let ship = new Ship(null, 5);
	ship.hits = 5;
	expect(ship.isSunk()).toBe(true);
});
