/*Query para contar la recurrencia de los primeros 10 numeros y el registro de los mismos.*/

/*TOP 10*/
WITH dbsortbanca AS(
    SELECT stdate AS Date, st1ra AS Numero FROM sorteos
    UNION ALL
    SELECT stdate AS Date, st2da FROM sorteos
    UNION ALL
    SELECT stdate AS Date, st3ra FROM sorteos
)   
    SELECT Numero, COUNT(*) as Recurrencia FROM sorteos  
    WHERE Date BETWEEN 1 AND 84    
    GROUP BY Numero
    ORDER BY Recurrencia DESC
    LIMIT 10;

/*TOP 10 listo para el codigo*/
WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia DESC LIMIT 10;

/*BOTTOM 10*/
WITH dbsortbanca AS(
    SELECT stdate AS Date, st1ra AS Numero FROM sorteos
    UNION ALL
    SELECT stdate AS Date, st2da FROM sorteos
    UNION ALL
    SELECT stdate AS Date, st3ra FROM sorteos
)   
    SELECT Numero, COUNT(*) as Recurrencia FROM sorteos  
    WHERE Date BETWEEN 1 AND 84    
    GROUP BY Numero
    ORDER BY Recurrencia ASC
    LIMIT 10;

/*BOTTOM 10 listo para el codigo*/
WITH sorteos AS(SELECT stdate AS Date, st1ra AS Numero FROM sorteos UNION ALL SELECT stdate AS Date, st2da FROM sorteos UNION ALL SELECT stdate AS Date, st3ra FROM sorteos) SELECT Numero, COUNT(*) as Recurrencia FROM sorteos WHERE Date BETWEEN ? AND ? GROUP BY Numero ORDER BY Recurrencia ASC LIMIT 10;


/*PIZARRA DE RESULTADOS*/
SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra 
FROM sorteos
WHERE (stdate = '2019/10/25') AND (stlottery = 'Nacional') AND (stbatch = 'Noche');

/*PIZARRA DE RESULTADOS listo para el codigo*/
SELECT stdate, stlottery, stbatch, st1ra, st2da, st3ra FROM sorteos WHERE (stdate = '2019/10/25') AND (stlottery = 'Nacional') AND (stbatch = 'Tarde');









