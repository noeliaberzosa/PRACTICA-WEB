async function checkNameAvailability() {

    let nombreInput = document.getElementById('nombre');
    let formulario = document.getElementById('formulario');

    let nombre = nombreInput.value;

    const response = await fetch(`/availableName?nombre=${nombre}`);

    const responseObj = await response.json();

    let message = responseObj.available? 
        '<p>Disponible</p>':
        '<p>Elija otro nombre, ese no está disponible</p>';

    const messageDiv = document.getElementById('message');
    if (message=='<p>Disponible</p>') {
        formulario.setAttribute('data-valid', 'si');
        messageDiv.style.color='#00008B';
    } else {
        formulario.setAttribute('data-valid', 'no');
        messageDiv.style.color='#FF0000';
    }
    messageDiv.innerHTML = message;
}