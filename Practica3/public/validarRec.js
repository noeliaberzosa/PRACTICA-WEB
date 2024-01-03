const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[A-Z].*$/, 
    usuario: /^@.*$/, 
    texto: /^.{1,500}$/,
    numeros: /^\d+$/,
    imagenR: /^(http:\/\/|https:\/\/).*\.(jpg|jpeg)$/i,
}

const campos = {
    nombreR: false,
    usuario: false,
    imagenR: false,
    ingredientes: false,
    pasos:false,
    duracion:false,
    personas: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
    case "nombreR":
        validarCampo(expresiones.nombre, e.target, 'nombreR');
    break;
    case "usuario":
        validarCampo(expresiones.usuario, e.target, 'usuario');
    break;
    case "ingredientes":
        validarCampo(expresiones.texto, e.target, 'ingredientes');
    break;
    case "pasos":
        validarCampo(expresiones.texto, e.target, 'pasos');
    break;
    case "personas":
        validarCampo(expresiones.numeros, e.target, 'personas');
    break;
    case "duracion":
        validarCampo(expresiones.numeros, e.target, 'duracion');
    break;
    case "imagenR":
        validarCampo(expresiones.imagenR, e.target, 'imagenR');
    break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

function myOnSubmitFunction(e){
    e.preventDefault();
    validarFormulario(e);
    if(campos.nombre && campos.descripcion && campos.imagen && campos.origen && campos.precio && (formulario.getAttribute('data-valid') === 'si') ){
        formulario.submit();
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
};
