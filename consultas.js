const { response } = require("express");

//Ingresar usuario
exports.login = async function (email, password){
    try{
        const results = await pool.query ( "SELECT id, email, password FROM users");
        let data = results.rows.find(user => user.email === email);
        if(data && data.password != password){
            data = 0;
        }
        return data; 
    } catch(error){
        console.log(error);
        return 0
    }
};
//Crear usuario
exports.createUser = async function (req,res){
    try{
        let data = res.req.body;
        const results = await pool.query (`INSERT INTO users (id, email, password) VALUES (${data.id}, ${data.email}, ${data.password},false)`);
        const newUser = results.rows[0];

        response = { status: "200",
        message: "User created", result: newUser};
        res.status(200).send(response);

        //Return newUser
    } catch (error){
        response = {
            response: { error : "500",
            message: "Error de registro"}
        };
        console.log(error);
        res.status(500).send(response);
    }
};
//Palíndromo
exports.searchPalindrome = async function (req, res) {
    let palabra = req.prompt("¿Qué producto buscas?").toLowerCase();

    //eliminar los espacios en blanco
    palabra = palabra.replace(/ /g, "");

    for (let i=0; i<palabra.length; i++){
        if (palabra[i]!= palabra[palabra.length-i-1]){
            return false;
        }
    }
    return res.palabra;
    };
    /* if (texto()){
        alert("Eso es palíndromo");
    }else {
        alert("Esto no es un palíndromo")
    } */
    const requestURL = 'https://github.com/walmartdigital/products-db/blob/master/database/01-products.json'
    let data_brand = [];
    let data_description = [];

    Object.keys(requestURL[0]).forEach( e => {
        data_brand.push(requestURL[0][e].brand);
        //data_description.push(requestURL[0[e]].description);
    });
exports.descuento = async function(req, res){
    res.send(calcularTotal)
};


module.exports = {
    login,
    createUser,
    searchPalindrome,
    descuento,
}