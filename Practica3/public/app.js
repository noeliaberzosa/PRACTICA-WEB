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