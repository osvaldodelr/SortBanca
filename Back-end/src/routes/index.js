const express = require('express');
const router = express.Router();

//RUTA PARA RENDERIZAR LA VISTA PRINCIPAL "/"
router.get('/', async (req, res) => {
    res.render('index');
});









module.exports = router;