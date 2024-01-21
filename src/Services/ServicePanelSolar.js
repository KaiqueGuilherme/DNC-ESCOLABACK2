import RepositoryPanelSolar from "../Repository/RepositoryPanelSolar.js";


class ServicesPanel{

   

    async CountEletric(panelID, CountEletric){
        
        const id = panelID;
        const MonthsYears = 12;
        const irradiacaoSolarMedia = 5.5;
        const days = 365;

        try{
            const PanelComplete = await RepositoryPanelSolar.FindByid(id);

            const PanelCompletePorcenty = PanelComplete.eficiencia / 100;

            const CaulatorWats = PanelComplete.watts_diarios; 

            const CountYear = CountEletric * MonthsYears; 

            const EnergySolarDay = irradiacaoSolarMedia * CaulatorWats * PanelCompletePorcenty;

            const EnergySolarYear = EnergySolarDay * days;

            const QuantPanel = Math.round(EnergySolarYear / CountYear);

            return QuantPanel;

        }catch(error){
            console.error('Erro ao Solicitação:', error);
            throw error;
        }
    }

    async GetPanelEletric(){
        try{
            const panels = RepositoryPanelSolar.findAllPanel();

            return panels;
        }catch(error){
            console.error('Erro ao Solicitação:', error);
            throw error;
        }
    }



}

export default new ServicesPanel;