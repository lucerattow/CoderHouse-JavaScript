export const sureValue = 2.5;
export const inst3 = 1.1;
export const inst6 = 1.2;
export const inst12 = 1.4;

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
