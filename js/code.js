class apartment {
	constructor(address, rent, expenses, sellValue) {
		this.address = address;
		this.rent = parseFloat(rent);
		this.expenses = parseFloat(expenses);
		this.sellValue = parseFloat(sellValue);
	}
}

const apartments = [];
apartments.push(new apartment("Altolaguirre al 2200", 50000, 11300, 0));
apartments.push(new apartment("Av. Francisco Bilbao al 2300", 48000, 4500, 0));
apartments.push(new apartment("Beruti 2819", 60000, 9800, 0));
apartments.push(new apartment("Av Las Heras al 2300", 55000, 12000, 0));
apartments.push(new apartment("Sarmiento al 2100", 45000, 5500, 0));
apartments.push(new apartment("AV. DEL Libertador AL 5500", 55000, 12000, 0));

const sureValue = 2.5;
const inst3 = 1.1;
const inst6 = 1.2;
const inst12 = 1.4;

main();

function main() {
	const button = document.getElementById("btnSubmit");
	button.addEventListener("click", btnSubmit_click);

	function btnSubmit_click() {
		const input = document.getElementById("inputSelectedOption");
		let option = parseInt(input.value);

		switch (option) {
			case 1:
				suretyInitialize();
				break;
			case 2:
				rentsDisplay(apartments);
				break;
			case 3:
				rentsSearch();
				break;
		}
	}
}

function suretyInitialize() {
	const div = document.getElementById("formulario");
	div.innerHTML = `
		<p>Calcular valor de seguro de caucion</p>
		<input id="inputRent" type="text" placeholder="ingrese el alquiler (mensual)"/>
		<input id="inputExpenses" type="text" placeholder="ingrese las expensas (mensual)"/>
		<button id="btnCalcSurety">calcular</button>
		<div id="divResult"></div>
	`;

	const btnCalcSurety = document.getElementById("btnCalcSurety");
	btnCalcSurety.addEventListener("click", btnCalcSurety_click);
}

function btnCalcSurety_click() {
	const divResult = document.getElementById("divResult");
	const inputRent = document.getElementById("inputRent");
	const inputExpenses = document.getElementById("inputExpenses");
	let rent = parseFloat(inputRent.value);
	let expenses = parseFloat(inputExpenses.value);

	if (!valueValidate(rent) || !valueValidate(expenses)) {
		divResult.innerHTML = "<p>El valor ingresado no es valido, debe ser un numero mayor a 0</p>";
	} else {
		let value = suretyCalc(rent, expenses);

		divResult.innerHTML = `
			<p>El valor del seguro para ALQUILER: $${rent}, EXPENSAS: $${expenses} es de:</p>
			<p>Total en 1 pago: $${value}</p>
			<p>Cuota en 3 pagos: $${parseInt(installmentsCalc(value, 3) / 3)}; Total: $${installmentsCalc(value, 3)}</p>
			<p>Cuota en 6 pagos: $${parseInt(installmentsCalc(value, 6) / 6)}; Total: $${installmentsCalc(value, 6)}</p>
			<p>Cuota en 12 pagos: $${parseInt(installmentsCalc(value, 12) / 12)}; Total: $${installmentsCalc(value, 12)}</p>`;
	}
}

function valueValidate(value) {
	if (value <= 0) return false;
	return true;
}

function suretyCalc(rent, expenses) {
	return (rent + expenses) * sureValue;
}

function installmentsCalc(subtotal, installments) {
	if (installments != 1 && installments != 3 && installments != 6 && installments != 12) return subtotal;

	switch (installments) {
		case 3:
			return parseInt(subtotal * inst3);
		case 6:
			return parseInt(subtotal * inst6);
		case 12:
			return parseInt(subtotal * inst12);
	}
}

function rentsDisplay(Apartments) {
	const div = document.getElementById("formulario");
	div.innerHTML = `
		<p>Listado de alquileres:</p>
		<br>
	`;

	for (const x of Apartments) {
		const apartDiv = document.createElement("div");
		apartDiv.innerHTML = `
			<p>Direccion: ${x.address}</p>
			<p>Alquiler: ${x.rent}</p>
			<p>Expensas: ${x.expenses}</p>
			<br>
		`;
		div.append(apartDiv);
	}
}

function rentsSearch() {
	const div = document.getElementById("formulario");
	div.innerHTML = `
		<p>Ingrese la direccion del departamento que desea buscar</p>
		<input id="inputSearch" type="text" />
		<button id="btnSearch">buscar</button>
		<br>
	`;

	const btnSearch = document.getElementById("btnSearch");
	btnSearch.addEventListener("click", btnSearch_click);
}

function btnSearch_click() {
	const inputSearch = document.getElementById("inputSearch");

	const result = apartments.filter(x => x.address.includes(inputSearch.value));
	rentsDisplay(result);
}
