const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[A-Z].*$/, 
    origen:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	descripcion: /^.{50,500}$/,
	precio: /^\d+$/,
    imagen: /^(http:\/\/|https:\/\/).*\.(jpg|jpeg)$/i,
}

const campos = {
	nombre: false,
	descripcion: false,
	imagen: false,
	origen: false,
	precio: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "descripcion":
            validarCampo(expresiones.descripcion, e.target, 'descripcion');
		break;
		case "origen":
            validarCampo(expresiones.origen, e.target, 'origen');
		break;
        case "precio":
            validarCampo(expresiones.precio, e.target, 'precio');
		break;
		case "imagen":
            validarCampo(expresiones.imagen, e.target, 'imagen');
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

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.descripcion && campos.imagen && campos.origen && campos.precio ){
        formulario.submit();
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
	}
});