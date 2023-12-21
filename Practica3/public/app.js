let next = 2;
async function loadMore(){
    let from = (next +1)*2;
    let to = from + 2;
    const response1 = await fetch(`/platos?from=${from}&to=${to}`);
    const newPlatos1 = await response1.text();
    const platos1 = document.getElementById("platos1");
    platos1.innerHTML += newPlatos1;
    next ++;
    from = (next +1)*2;
    to = from + 2;
    const response2 = await fetch(`/platos?from=${from}&to=${to}`);
    const newPlatos2 = await response2.text();
    const platos2 = document.getElementById("platos2");
    platos2.innerHTML += newPlatos2;
    next ++;
}