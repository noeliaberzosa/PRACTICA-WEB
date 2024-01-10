let next = 3;
async function loadMore(){
    if ( next != -1){
        let from = (next +1);
        let to = from + 4;
        const response = await fetch(`/platos?from=${from}&to=${to}`);
        const newPlatos = await response.text();
        const platos = document.getElementById("platos");
        platos.innerHTML += newPlatos;
        next += 4;
    }
}
async function search(){
    let buscado = document.getElementById("buscado").value;
    const response = await fetch(`/search?buscado=${buscado}`);
    const newPlatos = await response.text();
    const platos = document.getElementById("platos");
    platos.innerHTML = newPlatos;
    next = -1;
}
async function filterByOrigen(){
    let fOrigen = document.getElementById("fOrigen").value;
    const response = await fetch(`/filterO?origen=${fOrigen}`);
    const newPlatos = await response.text();
    const platos = document.getElementById("platos");
    platos.innerHTML = newPlatos;
    next = -1;
}
async function filterByTipo(){
    let fTipo = document.getElementById("tipo").value;
    const response = await fetch(`/filterT?tipo=${fTipo}`);
    const newPlatos = await response.text();
    const platos = document.getElementById("platos");
    platos.innerHTML = newPlatos;
    next = -1;
}
async function filterByPrecio(){
    let fPrecio = document.getElementById("precio").value;
    const response = await fetch(`/filterP?precio=${fPrecio}`);
    const newPlatos = await response.text();
    const platos = document.getElementById("platos");
    platos.innerHTML = newPlatos;
    next = -1;
}

async function filterPrecio(){

}
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