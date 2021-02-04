const mongoose = require('mongoose');
const uri      = 'mongodb://localhost/promotions?authentication=admin';
const config   = { user:"productListUser", pass:"productListPassword", useNewUrlParser: true, useUnifiedTopology: true };
const db       = mongoose.connection;

mongoose.connect(uri,config)
.catch(err => console.log(err) )


db.on('open', function(){
    console.log('bienvenido ..' + uri)
})

db.on('error', err =>{
    console.log('error en la conexion...')
})

exports.mongoose = mongoose;