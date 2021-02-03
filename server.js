const express = require ('express');
const app = express ();

app.listen(3000);

app.use('/supermercado', express.static(__dirname + '/views'))

console.log('Servidor funcionando')