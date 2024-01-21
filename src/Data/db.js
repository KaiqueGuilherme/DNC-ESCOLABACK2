import { Sequelize } from 'sequelize';

const con = new Sequelize ({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'panelsolar',
  });

export default con;