export default class Ship {
	constructor(name, length, hits = 0, sunk = false) {
		this.name = name;
		this.length = length;
		this.hits = hits;
		this.sunk = sunk;
	}
	getName() {
		return this.name;
	}
	hit() {
		this.hits++;
		return this.hits;
	}
	isSunk() {
		if (this.hits == this.length) {
			return (this.sunk = true);
		} else {
			return (this.sunk = false);
		}
	}
}
