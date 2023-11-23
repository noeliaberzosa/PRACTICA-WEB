import express from 'express';
import * as servidor from './PlatoService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('principal', {
        platos: servidor.getPlatos()
    });
});
router.post("/new",(req,res)=>{
    let {nombre, imagen, descripcion, origen, tipo, precio} = req.body;
    servidor.addPlato({nombre, imagen, descripcion, origen, tipo, precio});
    res.render('principal', {
        platos: servidor.getPlatos()
    });
});
router.get('/plato/:id', (req, res) => {
    let plato = servidor.getPlato(req.params.id);
res.render('elemento', { plato});
});
router.get("/plato/:id/delete",(req,res)=>{
    servidor.deletePlato(req.params.id);
    res.render('principal', {
        platos: servidor.getPlatos()
    });
});

export default router;