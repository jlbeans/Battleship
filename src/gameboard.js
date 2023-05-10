const Gameboard = (() => {
	let shipCoordinates = [];
	let hits = [];
	let misses = [];
	const board = [];
	for (let i = 0; i < 10; i++) {
		board[i] = [];
		for (let j = 0; j < 10; j++) {
			board[i][j] = '';
		}
	}

	const placeShip = (ship, y, x, direction) => {
		const currentShip = ship;
		if (direction === 'x') {
			for (let i = 0; i < currentShip.length; i++) {
				board[y][x + i] = currentShip.name;
				shipCoordinates.push(board[y][x + i]);
			}
		} else {
			for (let i = 0; i < currentShip.length; i++) {
				board[y + i][x] = currentShip.name;
				shipCoordinates.push(board[y + i][x]);
			}
		}
		return board;
	};

	const receiveAttack = (y, x, ships) => {
		shipCoordinates = getShipCoordinates();
		if (shipCoordinates.includes(board[y][x])) {
			const ship = ships.find((ship) => ship.name === board[y][x]);
			ship.hit();
			const hit = { y: y, x: x };
			hits.push(hit);
			return hit;
		} else {
			const miss = { y: y, x: x };
			misses.push(miss);
			return miss;
		}
	};

	const validMove = (y, x) => {
		const guessed = getMisses().some((item) => item.y === y && item.x === x);
		const hit = getHits().some((item) => item.y === y && item.x === x);

		if (guessed || hit) {
			return false;
		} else {
			return true;
		}
	};

	const gameOver = (ships) => {
		let sunkShips = ships.filter((ship) => ship.isSunk());
		if (ships.length == sunkShips.length) {
			return true;
		} else {
			return ships;
		}
	};

	const getShipCoordinates = () => {
		return shipCoordinates;
	};

	const getHits = () => {
		return hits;
	};

	const getMisses = () => {
		return misses;
	};

	return {
		placeShip,
		receiveAttack,
		gameOver,
		getShipCoordinates,
		getHits,
		getMisses,
		validMove,
	};
})();

export default Gameboard;
