import ServicePanelSolar from "../Services/ServicePanelSolar.js";



class ControllersPanelSOlar{

    async CountEletricPanel(req, res){
        const { panelID, CountEletric } = req.body;

        try{
            const PanelSolarEnd = await ServicePanelSolar.CountEletric(panelID, CountEletric);

            if(PanelSolarEnd){
                
               return res.status(200).json({PanelSolarEnd})
            }

        }catch(error){
            res.status(500).json({ error: 'Erro ao calcular' });
            throw error;
            
        }
    }

    async GetControllerPanels(req, res){
        try{
            const panels = await ServicePanelSolar.GetPanelEletric();

            return res.status(200).json({panels});
        }catch(error){
            res.status(500).json({ error: 'Erro ao consultar' });
            throw error;
        }
    }

}

export default new ControllersPanelSOlar;