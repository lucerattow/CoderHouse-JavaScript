//rents.js
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

function rentsInitialize() {
	let displayMessage = "Listado de alquileres:\n\n";
	apartments.forEach(element => (displayMessage += `Direccion: ${element.address}\nAlquiler: ${element.rent}\nExpensas: ${element.expenses}\n\n`));

	alert(displayMessage);
}

//surety.js (no se como importar funciones, vi como hacerlo pero no me funciona asi que ya fue jaja)
const sureValue = 2.5;
const inst3 = 1.1;
const inst6 = 1.2;
const inst12 = 1.4;

function suretyInitialize() {
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

//code.js
function main() {
	let option = parseInt(
		prompt("Seleccionar una de las siguientes funciones:\n" + "1. Calcular costo seguro de caucion\n" + "2. Mostrar alquileres disponibles")
	);

	switch (option) {
		case 1:
			suretyInitialize();
			break;
		case 2:
			rentsInitialize();
			break;
	}
}

main();
