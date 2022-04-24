//Estas constantes me las invente.... los valores no son reales.
const sureValue = 2.5;
const inst3 = 1.1;
const inst6 = 1.2;
const inst12 = 1.4;

export function initialize() {
	alert("Calcular valor de seguro de caucion\n\n");

	let rent = parseInt(prompt("Por favor ingresa el valor del alquiler (mensual):"));
	let expenses = parseInt(prompt("Por favor ingresa el valor de las expensas:"));

	if (!valueValidate(rent) || !valueValidate(expenses)) {
		return null;
	} else {
		let value = suretyCalc(rent, expenses);
		alert(
			`El valor del seguro para ALQUILER: $${rent}, EXPENSAS: $${expenses} es de:\n` +
				`Total en 1 pago: $${value}\n` +
				`Cuota en 3 pagos: $${parseInt(installmentsCalc(value, 3) / 3)}; Total: $${installmentsCalc(value, 3)}\n` +
				`Cuota en 6 pagos: $${parseInt(installmentsCalc(value, 6) / 6)}; Total: $${installmentsCalc(value, 6)}\n` +
				`Cuota en 12 pagos: $${parseInt(installmentsCalc(value, 12) / 12)}; Total: $${installmentsCalc(value, 12)}`
		);
	}
}

function valueValidate(value) {
	if (value <= 0) {
		alert("El valor ingresado no es valido, debe ser un numero mayor a 0");
		return false;
	}
	return true;
}

function suretyCalc(rent, expenses) {
	return (rent + expenses) * sureValue;
}

function installmentsCalc(subtotal, installments) {
	if (installments != 1 && installments != 3 && installments != 6 && installments != 12) {
		return subtotal;
	}

	switch (installments) {
		case 3:
			//Este for es para cumplir la consigna de usar un ciclo...
			let aux = subtotal / installments;
			let result = 0;

			for (let i = 0; i < installments; i++) {
				result += aux;
			}

			return parseInt(result * inst3);
			break;

		case 6:
			return parseInt(subtotal * inst6);
			break;

		case 12:
			return parseInt(subtotal * inst12);
			break;
	}
}
