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
			if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
                campos["nombre"]=true
            }else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')
                campos["nombre"]=false
            }
		break;
		case "descripcion":
			if(expresiones.descripcion.test(e.target.value)){
                document.getElementById('grupo__descripcion').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__descripcion').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__descripcion .formulario__input-error').classList.remove('formulario__input-error-activo')
                campos["descripcion"]=true
            }else{
                document.getElementById('grupo__descripcion').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__descripcion').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__descripcion .formulario__input-error').classList.add('formulario__input-error-activo')
                campos["descripcion"]=false
            }
		break;
		case "origen":
			if(expresiones.origen.test(e.target.value)){
                document.getElementById('grupo__origen').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__origen').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__origen .formulario__input-error').classList.remove('formulario__input-error-activo')
                campos["origen"]=true
            }else{
                document.getElementById('grupo__origen').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__origen').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__origen .formulario__input-error').classList.add('formulario__input-error-activo')
                campos["origen"]=false
            }
		break;
        case "precio":
			if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo__precio').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__precio').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__precio .formulario__input-error').classList.remove('formulario__input-error-activo')
                campos["precio"]=true
            }else{
                document.getElementById('grupo__precio').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__precio').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__precio .formulario__input-error').classList.add('formulario__input-error-activo')
                campos["precio"]=false
            }
		break;
		case "imagen":
			if(expresiones.imagen.test(e.target.value)){
                document.getElementById('grupo__imagen').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__imagen').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__imagen .formulario__input-error').classList.remove('formulario__input-error-activo')
                campos["imagen"]=true
            }else{
                document.getElementById('grupo__imagen').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__imagen').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__imagen .formulario__input-error').classList.add('formulario__input-error-activo')
                campos["imagen"]=false
            }
		break;
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