export class apartment {
	constructor(address, rent, expenses, sellValue) {
		this.address = address;
		this.rent = parseFloat(rent);
		this.expenses = parseFloat(expenses);
		this.sellValue = parseFloat(sellValue);
	}
}
