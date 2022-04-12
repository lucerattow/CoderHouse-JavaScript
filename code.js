function main()
{
    let response = prompt(
        "Bienvenido a mi ejercicio de JavaScript\n" +
        "Por favor ingresa un valor numerico para acceder a cada ejemplo:\n\n" +
        "1. Ejemplo de ciclo \"for\"\n" +
        "2. Ejemplo de ciclo \"while\""
    );
    response = parseInt(response);
    
    switch (response) {
        case 1:
            forExample();
            break;
            
        case 2:
            whileExample();
            break;
    
        default:
            invalidInput();
            break;
    }
}

function inputValidate(value)
{
    if (value <= 0)
    {
        alert("El valor ingresado no es valido, debe ser un numero mayor a 0");
        return false;
    }
    else if (value > 20)
    {
        alert("El valor ingresado no es valido, debe ser un numero menor o igual a 20");
        return false;
    }
    return true;
}

function invalidInput()
{
    alert("El valor ingresado no corresponde a ninguna de las opciones disponibles");
}

function forExample()
{
    let response = prompt(
        "Seleccionaste la opcion 1 (ejemplo de ciclo \"for\")\n" +
        "Ingresa un numero que determine cuantas veces se debe repetir el ciclo\n" +
        "Este numero debe ser mayor a 0, y menor que 20"
    );
    response = parseInt(response);

    if (!inputValidate(response))
    {
        main();
        return;
    }

    for (let index = 0; index < response; index++) {
        console.log(`El ciclo "for" se repitio ${index + 1} veces`);
    }
    alert("El resultado del ejemplo se vera reflejado en la consola");
}

function whileExample()
{
    let response = prompt(
        "Seleccionaste la opcion 2 (ejemplo de ciclo \"while\")\n" +
        "Ingresa un numero que determine cuantas veces se debe repetir el ciclo\n" +
        "Este numero debe ser mayor a 0, y menor que 20"
    );
    response = parseInt(response);

    if (!inputValidate(response))
    {
        main();
        return;
    }
    
    let index = 0;
    while (index < response) {
        console.log(`El ciclo "while" se repitio ${index + 1} veces`);
        index++;
    }
    alert("El resultado del ejemplo se vera reflejado en la consola");
}

main();