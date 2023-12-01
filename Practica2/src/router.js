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
    let {nombre, imagen, descripcion, origen, tipo, precio} = req.body;
    let error = servidor.validar({nombre, imagen, descripcion, origen, tipo, precio});
    if (error===0){
        let id= servidor.addPlato({nombre, imagen, descripcion, origen, tipo, precio});
        res.render('elemento', {
            plato: servidor.getPlato(id)
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
res.render('elemento', { plato});
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
    let {nombre, imagen, descripcion, origen, tipo, precio} = req.body;
    let error = servidor.validar({nombre, imagen, descripcion, origen, tipo, precio});
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

export default router;