//Estas constantes me las invente.... los valores no son reales.
const seguroValue = 2.5;
const cuota3 = 1.1;
const cuota6 = 1.2;
const cuota12 = 1.4;

function main() {
	alert("Bienvenido a mi ejercicio de JavaScript\n" + "En este caso vamos a calcular el valor de un seguro de caucion\n\n");

	let alquiler = parseInt(prompt("Por favor ingresa el valor del alquiler (mensual):"));
	let expensas = parseInt(prompt("Por favor ingresa el valor de las expensas:"));

	if (!alquilerValidar(alquiler) || !expensasValidar(expensas)) {
		return null;
	} else {
		let value = calcularSeguro(alquiler, expensas);
		alert(
			`El valor del seguro para ALQUILER: $${alquiler}, EXPENSAS: $${expensas} es de:\n` +
				`Total en 1 pago: $${value}\n` +
				`Cuota en 3 pagos: $${parseInt(calcularCuotas(value, 3) / 3)}; Total: $${calcularCuotas(value, 3)}\n` +
				`Cuota en 6 pagos: $${parseInt(calcularCuotas(value, 6) / 6)}; Total: $${calcularCuotas(value, 6)}\n` +
				`Cuota en 12 pagos: $${parseInt(calcularCuotas(value, 12) / 12)}; Total: $${calcularCuotas(value, 12)}`
		);
	}
}

function alquilerValidar(alquiler) {
	if (alquiler <= 0) {
		alert("El valor ingresado para el alquiler no es valido, debe ser un numero mayor a 0");
		return false;
	}
	return true;
}

function expensasValidar(expensas) {
	if (expensas <= 0) {
		alert("El valor ingresado para las expensas no es valido, debe ser un numero mayor a 0");
		return false;
	}
	return true;
}

function calcularSeguro(alquiler, expensas) {
	return (alquiler + expensas) * seguroValue;
}

function calcularCuotas(subtotal, cuotas) {
	if (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12) {
		return subtotal;
	}

	switch (cuotas) {
		case 3:
			//Este for es para cumplir la consigna de usar un ciclo...
			let aux = subtotal / cuotas;
			let result = 0;

			for (let i = 0; i < cuotas; i++) {
				result += aux;
			}

			return parseInt(result * cuota3);
			break;

		case 6:
			return parseInt(subtotal * cuota6);
			break;

		case 12:
			return parseInt(subtotal * cuota12);
			break;
	}
}

main();
