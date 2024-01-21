import { DataTypes } from "sequelize";
import con from "../db.js";


const PanelSolar = con.define('panels',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      select: true,
      
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        select: true,
      },
    watts_diarios: {
        type: DataTypes.INTEGER,
        allowNull: false,
        select: true,
      },
    eficiencia: {
        type: DataTypes.FLOAT,
        allowNull: false,
        select: true,
      },
    
},{
    timestamps: false,
  });

export default PanelSolar;