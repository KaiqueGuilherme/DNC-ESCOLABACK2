import express from 'express';
import ControllerPanelSolar from '../Controllers/ControllerPanelSolar.js';


const PainelSolar = express.Router();

PainelSolar.post('/CalculandoItens', ControllerPanelSolar.CountEletricPanel);
PainelSolar.get('/PaineisSolares', ControllerPanelSolar.GetControllerPanels);

export default PainelSolar;