import express from 'express';
import * as servidor from './PlatoService.js';

const router = express.Router();

router.get('/', (req, res) => {
    let platos1
    let platos2
    platos1 = servidor.getPlatos().platos1;
    platos2 = servidor.getPlatos().platos2;
    res.render('principal', {
        platos1: platos1,
        platos2: platos2
    });
});
router.post("/new",(req,res)=>{
    let {nombre, imagen, descripcion, origen, tipo, precio, recetas} = req.body;
    let error = servidor.validar({nombre, imagen, descripcion, origen, tipo, precio, recetas});
    if (error===0){
        let id= servidor.addPlato({nombre, imagen, descripcion, origen, tipo, precio, recetas});
        res.render('elemento', {
            plato: servidor.getPlato(id),
        });
    }
    else{

        res.render('error',{
            error: error
        })
    }
});
router.get('/plato/:id', (req, res) => {
    let plato = servidor.getPlato(req.params.id);
res.render('elemento', { 
    plato,
    recetas: plato.recetas
    });
});

router.get("/delete/:id",(req,res)=>{
    let plato = servidor.getPlato(req.params.id);
    servidor.deletePlato(req.params.id);
    let platos1
    let platos2
    platos1 = servidor.getPlatos().platos1;
    platos2 = servidor.getPlatos().platos2;
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
    let error = servidor.validar({nombre, imagen, descripcion, origen, tipo, precio, recetas});
    if(error==0){
        let plato = servidor.getPlato(req.params.id);
        servidor.editarCampos({nombre, imagen, descripcion, origen, tipo, precio},plato);
        
        res.render('elemento', { plato});}
        else{

            res.render('error',{
                error: error
            })
        }
});

router.post('/updatedReceta', (req,res)=> {
    let rec = new servidor.Receta(
        req.body.nombreR,
        req.body.usuario,
        req.body.ingredientes,
        req.body.imagenR,
        req.body.personas,
        req.body.duracion,
        req.body.pasos,
        req.body.alergenos,
        req.body.vegano
    );
    let error = servidor.validarRec(rec);
    if(error == 0){
        let plato = servidor.getPlato(req.params.id);
        plato.recetas.push(rec);

        res.render('elemento', {plato})

    }else {
        res.render('error',{
            error:error
        })
    }
})

export default router;