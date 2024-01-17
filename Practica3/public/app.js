let next = 0;
async function loadMore(){
    if ( next != -1){
        let from = (next);
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
loadMore();