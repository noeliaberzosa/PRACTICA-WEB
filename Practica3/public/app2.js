async function cargarReceta(){
    let recetas = document.getElementById("recetas");
    let idu = document.URL;
    for (let i=idu.length-1; i>=0;i--){
        if(idu[i]==='/'){
           var id= idu.slice(-(idu.length-1-i)); 
           break
        }
    }
    
    let nombre = document.getElementById("nombreR").value;
    let usuario = document.getElementById("usuario").value;
    let ingredientes = document.getElementById("ingredientes").value;
    let imagen = document.getElementById("imagenR").value;
    let personas = document.getElementById("personas").value;
    let duracion = document.getElementById("duracion").value;
    let instrucciones = document.getElementById("pasos").value;
    let alergia = document.getElementById("alergia").value;
    let vegano = document.getElementById("vegano").value;
    const response = await fetch(`/updateReceta?id=${id}&nombreR=${nombre}&usuario=${usuario}&ingredientes=${ingredientes}
    &imagenR=${imagen}&personas=${personas}&duracion=${duracion}&pasos=${instrucciones}&alergenos=${alergia}&vegano=${vegano}`);
    const newRecipe = await response.text();
    document.getElementById("nombreR").value='';
    document.getElementById("usuario").value='';
    document.getElementById("ingredientes").value='';
    document.getElementById("imagenR").value='';
    document.getElementById("personas").value='';
    document.getElementById("duracion").value='';
    document.getElementById("pasos").value='';
    document.getElementById("alergia").value='';
    document.getElementById("vegano").value='';
    recetas.innerHTML += newRecipe;
}
async function loadRecetas(){
    let idu = document.URL;
    for (let i=idu.length-1; i>=0;i--){
        if(idu[i]==='/'){
           var id= idu.slice(-(idu.length-1-i)); 
           break
        }
    }
    let response = await fetch(`/loadRecetas?id=${id}`);
    let newRecetas = await response.text();
    let recetas = document.getElementById("recetas");
    recetas.innerHTML += newRecetas;
}
loadRecetas();