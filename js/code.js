import { rentsDisplay, rentsSearch } from "./Functions/rents.js";
import { suretyInitialize } from "./Functions/surety.js";

const button = document.getElementById("btnSubmit");
button.addEventListener("click", btnSubmit_click);

function btnSubmit_click() {
	const input = document.getElementById("inputSelectedOption");
	let option = parseInt(input.value);

	switch (option) {
		case 1:
			suretyInitialize();
			console.log(1);
			break;
		case 2:
			rentsDisplay(apartments);
			console.log(2);
			break;
		case 3:
			rentsSearch();
			console.log(3);
			break;
	}
}
