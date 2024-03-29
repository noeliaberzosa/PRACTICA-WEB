import express from 'express';
import * as servidor from './PlatoService.js';
let existingName = [ 'Croquetas', 'Tacos', 'San Francisco','Ensalada','Pizza','Arepas', 'Rollitos de primavera','Sangría', 'Tiramisú','Paella', 'Batidos','Totitas', 'Tortilla', 'Miguelitos' ];

const router = express.Router();

router.get('/', (req, res) => {

    res.render('principal');
});
router.post("/new",(req,res)=>{
    
    let {nombre, imagen, descripcion, origen, tipo, precio, recetas} = req.body;
    let id= servidor.addPlato({nombre, imagen, descripcion, origen, tipo, precio,recetas});
    existingName.push(nombre);
    res.render('elemento', {
        plato: servidor.getPlato(id),
    });
});
router.get('/plato/:id', (req, res) => {
    let plato = servidor.getPlato(req.params.id);
res.render('elemento', { 
    plato
    });
});

router.get("/delete/:id",(req,res)=>{
    let plato = servidor.getPlato(req.params.id);
    existingName=existingName.filter(nombre => nombre !== plato.nombre);
    servidor.deletePlato(req.params.id);
    let platos1
    let platos2
    platos1 = servidor.getPlatos(0,4).platos1;
    platos2 = servidor.getPlatos(0,4).platos2;
    res.render('principal', {
        platos1: platos1,
        platos2: platos2
    });
});

router.get('/editar/:id', (req, res) => {
    let plato = servidor.getPlato(req.params.id);
res.render('formulario_editar', { plato});
});

router.post('/updated/:id',(req,res)=>{
    let {nombre, imagen, descripcion, origen, tipo, precio, recetas} = req.body;
    let plato = servidor.getPlato(req.params.id);
    existingName=existingName.filter(nombre => nombre !== plato.nombre);
    existingName.push(nombre);
    servidor.editarCampos({nombre, imagen, descripcion, origen, tipo, precio},plato);
    res.render('elemento', { 
        plato,
        recetas: plato.recetas
    });
});

router.get('/updateReceta',(req,res)=> {
    let nombreR= req.query.nombreR;
    let usuario = req.query.usuario;
    let ingredientes = req.query.ingredientes;
    let imagenR = req.query.imagenR;
    let personas = req.query.personas;
    let duracion = req.query.duracion;
    let pasos = req.query.pasos;
    let alergenos = req.query.alergenos;
    let vegano = req.query.vegano;
    let receta = {
        nombreR:nombreR, usuario:usuario, ingredientes:ingredientes,imagenR:imagenR,personas:personas,duracion:duracion,
        pasos: pasos,alergenos:alergenos,vegano:vegano
    };
    servidor.aniadirReceta(req.query.id,receta);
    res.render('receta', {
        receta: receta
    });
});

router.get('/loadRecetas',(req,res)=>{
    let id = req.query.id;
    console.log(servidor.getPlato(id).recetas)
    let recetas = servidor.getPlato(id).recetas;
   
    res.render('recetaIni',{
        recetas:recetas
    });
});

router.get("/platos",(req,res)=>{
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    let platos1 = servidor.getPlatos(from,to).platos1;
    let platos2 = servidor.getPlatos(from,to).platos2;
    res.render('platos', {
        platos1: platos1,
        platos2: platos2
    });
}); 
router.get("/search",(req,res)=>{
    const buscado = req.query.buscado;
    let platosBus = servidor.getBuscados(buscado);
    let platos1 = servidor.divPlatos(platosBus).platos1;
    let platos2 = servidor.divPlatos(platosBus).platos2;
    res.render('platos', {
        platos1: platos1,
        platos2: platos2
    });
});

router.get("/filterO",(req,res)=>{
    const origen = req.query.origen;
    let platosBus = servidor.getFiltradosO(origen);
    let platos1 = servidor.divPlatos(platosBus).platos1;
    let platos2 = servidor.divPlatos(platosBus).platos2;
    res.render('platos', {
        platos1: platos1,
        platos2: platos2
    });
});
router.get("/filterT",(req,res)=>{
    const tipo = req.query.tipo;
    let platosBus = servidor.getFiltradosT(tipo);
    let platos1 = servidor.divPlatos(platosBus).platos1;
    let platos2 = servidor.divPlatos(platosBus).platos2;
    res.render('platos', {
        platos1: platos1,
        platos2: platos2
    });
})
router.get("/filterP",(req,res)=>{
    const precio = req.query.precio;
    let platosBus = servidor.getFiltradosP(precio);
    let platos1 = servidor.divPlatos(platosBus).platos1;
    let platos2 = servidor.divPlatos(platosBus).platos2;
    res.render('platos', {
        platos1: platos1,
        platos2: platos2
    });
})

router.get('/availableName', (req, res) => {

    let name = req.query.nombre;

    let availableName = existingName.indexOf(name) === -1;

    let response = {
        available: availableName
    }

    res.json(response);
});

export default router;