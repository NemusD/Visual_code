const express = require ('express');
const { searchPalindrome } = require('./consultas');
const app = express ();

app.listen(3000);

app.use('/supermercado', express.static(__dirname + '/views'))

console.log('Servidor funcionando')

app.get("/supermercado", async(req, res) => {
    res.send(products);
});

//Consulta de busqueda
app.get("/supermercado", async (req, res) => {
    console.log(products.map(products => products.id))
    console.log(products.map(products => products.brand))
    console.log(products.map(products => products.description))
    
    const palindromo = searchPalindrome.brand
    });

app.post("/supermercado/usuario", async (req, res) => {
    try{
        let data = res.req.body;
        let result = await consultas.login(data.email, data.password);

        if(result && result !=0){
            let user = {
                id : result.id,
                email: result.email,
            }
            response = { status: "200", message: "Login exitoso", result: user};
            res.status(200).send(response);
       }
    }catch {
           let data = {
               error : "401",
               message : "Usuario no encontrado"
           }
           response = { status: "401", message: "Login sin autorizaciónn", result: data};
           res.status(401).send(response);
       }
    });