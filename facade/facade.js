//constants
const express = require('express');
const serviceMortgage = require('../service/service');
const app = express();
//var general
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json      
app.use(bodyParser.json())


//Por temas de vulnerabilidad solo tendremos un endPoint, ademas habra que añadir un fichero de configuración por ejemplo 
//del puerto o endpoint esto sera deuda tecnica que tenemos que andalizar
//todo esto yo en mis trabajos lo he visto por variables de entorno
// hay que tratar que la capa facade y dao solo sean tres lineas de codigo y la chicha en service
app.get('/getMortgage', (req, res) => {
    let body = req.body;
    let response = serviceMortgage.getMortgage(body);
    res.send(response);
})

app.listen(3000, () => console.log('listening request whit the port 3000'))