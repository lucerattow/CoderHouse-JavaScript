import { apartment } from "../objects/apartment.js";

const apartments = [];
apartments.push(new apartment("Altolaguirre al 2200", 50000, 11300, 0));
apartments.push(new apartment("Av. Francisco Bilbao al 2300", 48000, 4500, 0));
apartments.push(new apartment("Beruti 2819", 60000, 9800, 0));
apartments.push(new apartment("Av Las Heras al 2300", 55000, 12000, 0));
apartments.push(new apartment("Sarmiento al 2100", 45000, 5500, 0));
apartments.push(new apartment("AV. DEL Libertador AL 5500", 55000, 12000, 0));

export function rentsDisplay(Apartments) {
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

export function rentsSearch() {
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
