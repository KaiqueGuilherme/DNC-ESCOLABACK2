import PanelSolar from "../Data/models/ModelsPanelSolar.js";


class RepositoryPanel{

    
    async FindByid(id){
        const panel = await PanelSolar.findByPk(id);
        return {
            id: panel.dataValues.id,
            nome: panel.dataValues.nome,
            watts_diarios: panel.dataValues.watts_diarios,
            eficiencia: panel.dataValues.eficiencia,
        };
    }

    async findAllPanel(){
        const Painels = await PanelSolar.findAll();
        const panels = Painels.map(panel => panel.dataValues);
        return panels;
    }
    




}

export default new RepositoryPanel();