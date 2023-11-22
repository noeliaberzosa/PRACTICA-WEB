import express from 'express';
import * as servidor from './PlatoService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('principal', {
        platos: servidor.getPlatos()
    });
});
router.post("/añadir",(req,res)=>{
    let {nombre, imagen, descripcion, origen, tipo, precio} = req.body;
    servidor.addPlato({nombre, imagen, descripcion, origen, tipo, precio});
    res.render("principal.html");
});
export default router;