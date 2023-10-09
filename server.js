const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

/* HTTP verb - resources
- GET: receber dados 
- POST: enviar dados/informações para processamento
- PUT: atualizar dados
- DELETE: apagar */

//http://localhost:3000/clients

app.get("/clients", function(req, res){
    res.json(data);
});

/*Exemplo com mais de um parâmetro:
app.get("/clients/:id/posts/:pid", function(req, res){
const { id, pid } = req.params*/

app.get("/clients/:id", function(req, res){
const { id } = req.params
const client = data.find(cli => cli.id == id);

if (!client) return res.status(204).json();
Response.json(client);
});

app.post("/clients", function(req, res){
const { name, email } = req.body;

//saving data
res.json({ name, email });
});

app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

 if (!client) return res.status(204).json();
const { name } = req.body;
client.name = name;
res.json(client);
});

app.delete("/clients", function(req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);
    res.json(clientsFiltered);
});

app.listen(3000, function(){
    console.log("server is running");
})