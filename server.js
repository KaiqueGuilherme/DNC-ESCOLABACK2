import App from "./app.js";

const port = 1521;

App.listen(port, () =>{
    console.log(`Servidor aberto na Porta: ${port}`);
})