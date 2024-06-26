const express = require("express");
const bodyParser = require("body-parser");
const misrutas = require('./routes/rutas');
const cors = require('cors')
const db = require('./firebase-config');

const app = express(); 
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',misrutas);


app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
});
