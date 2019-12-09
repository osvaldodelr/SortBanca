const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const hbs = require('handlebars');
const app = express();
//const datepicker = require ('js-datepicker');


// Settings global
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
}));

//inicializar el uso del @index+1 en platilla hbs
app.set('view engine', '.hbs');
hbs.registerHelper("math", function(value)
{
    return parseInt(value) + 1;
});

// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// ROUTES REQUIRE
app.use(require('./routes/index'));
app.use(require('./routes/querys'));



//DIRECTORIO ESTATICO
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap')));



// SERVIDOR WEB
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
