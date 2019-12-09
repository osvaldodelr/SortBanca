const express = require('express');
const router = express.Router();
//convocatoria de la conection a base de datos
const db = require('../database');



// RENDERIZACION DE LAS CONSULTAS POR RANGO DE FECHA.
router.get('/querys', async (req, res) => {

    const nowFecha = new Date();
    const date1 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-7);
    const date2 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate());

    const TOP = await db.query('WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia DESC LIMIT 10', [date1, date2]);
    const BOTTOM = await db.query('WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia ASC LIMIT 10',[date1, date2]);
      
    res.render('querys/list', { querys: BOTTOM, TOP, BOTTOM}); 
});



router.post('/querys', async (req, res) => {

    const {date1, date2} = req.body;

    const TOP = await db.query('WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia DESC LIMIT 10', [date1, date2]);
    const BOTTOM = await db.query('WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia ASC LIMIT 10',[date1, date2]);

    res.render('querys/list', { querys: BOTTOM, TOP, BOTTOM}); 
});





// RENDERIZACION DE LAS PIZARRAS.
router.get('/pizarra', async (req, res) => {

    const nowFecha = new Date();
    const date1 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-1);
    const date2 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-2);
    const date3 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-3);
    const date4 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-4);
    const date5 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-5);
    const date6 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-6);
    const date7 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate()-7);
    const date0 = new Date(nowFecha.getFullYear(), nowFecha.getMonth(), nowFecha.getDate());
    

    const Real = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "Real") AND (stbatch = "Tarde")', [date0]);
    const NYtarde = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "New York") AND (stbatch = "Tarde")', [date0]);
    const Nacionalt = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "Nacional") AND (stbatch = "Tarde")', [date0]);
    const Loteka = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "Loteka") AND (stbatch = "Noche")', [date0]);
    const NYnoche = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "New York") AND (stbatch = "Noche")', [date0]);
    const Leidsa = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "Leidsa") AND (stbatch = "Noche")', [date0]);
    const Nacionaln = await db.query('SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = ? ) AND (stlottery = "Nacional") AND (stbatch = "Noche")', [date0]);

    console.log(Real, NYtarde, Nacionalt, Loteka, NYnoche, Leidsa, Nacionaln)
    res.render('querys/pizarra', { querys: Real, NYtarde, Nacionalt, Loteka, NYnoche, Leidsa, Nacionaln }); 
});





module.exports = router;