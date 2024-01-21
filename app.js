import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import con from "./src/Data/db.js";
import PainelSolar from "./src/Router/RouterPanelSolar.js";


const App = express();

App.use(express.json());
App.use(bodyParser.json());
App.use(cors());

App.use('/Panel', PainelSolar);


con.sync({ force: false }).then(() => {
    console.log('Banco de dados sincronizado');
  }).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

export default App;